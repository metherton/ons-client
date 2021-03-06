import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import '@material/mwc-button';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';

import { PageHome } from './PageHome.js';
import { PageSearch } from './PageSearch.js';
import { PageFamilyTrees } from './PageFamilyTrees.js';
import { PageGedcomSearchResults } from './PageGedcomSearchResults.js';
import { PageSearchResults } from './PageSearchResults.js';
import { PagePerson } from './PagePerson.js';
import { PageContact } from './PageContact.js';

import { createStore } from 'redux'
import onsApp from './reducers'

import store from './store/configureStore';
import {
  addPerson,
  setInitialPersons,
  setInitialGedcomPersons,
  toggleTodo,
  setPerson,
  VisibilityFilters
} from './actions'

export class OnsClient extends LitElement {
  static get properties() {
    return {
      page: { type: String },
      persons: {type: Array},
      gedcomPersons: {type: Array},
      person: {type: String},
    };
  }

  constructor() {
    super();
    this.page = 'home';
    this.persons = [];
    this.gedcomPersons = [];
    this.person = '';
  }

  static get styles() {
    return css`
      mwc-top-app-bar {
        --mdc-theme-primary: black;
      }
    `;
  }

  toggleDrawer(e) {
    this.shadowRoot.getElementById('leftdrawer').open = !this.shadowRoot.getElementById('leftdrawer').open;
  }

  showGedcomPersons(e) {
    this.page = 'gedcomResults';
    this._renderPage();
  }

  showPersons(e) {
    this.page = 'results';
    this._renderPage();
  }

  render() {
    return html`
      <mwc-drawer id="leftdrawer" type="dismissible">
        <mwc-list>
          <li>
            <mwc-list-item id="home" @click=${this.__onNavClicked} graphic="icon">
              <span>Home</span>
              <mwc-icon slot="graphic">home</mwc-icon>
            </mwc-list-item>
          </li>
          <li>
            <mwc-list-item id="search" @click=${this.__onNavClicked} graphic="icon">
              <span>Search & Browse</span>
              <mwc-icon slot="graphic">search</mwc-icon>
            </mwc-list-item>
          </li>
          <li>
            <mwc-list-item id="familyTrees" @click=${this.__onNavClicked} graphic="icon">
              <span>Family Trees</span>
              <mwc-icon slot="graphic">nature_people</mwc-icon>
            </mwc-list-item>
          </li>
          <li>
            <mwc-list-item id="dna" graphic="icon" @click=${this.__onNavClicked} >
              <span>DNA</span>
              <mwc-icon slot="graphic">local_pharmacy</mwc-icon>
            </mwc-list-item>
          </li>
          <li>
            <mwc-list-item id="contact" graphic="icon" @click=${this.__onNavClicked} >
              <span>Contact</span>
              <mwc-icon slot="graphic">contact_support</mwc-icon>
            </mwc-list-item>
          </li>
        </mwc-list>

        <main slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button @click="${this.toggleDrawer}" slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Etherton ONS</div>
            <mwc-icon-button icon="search" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="help" slot="actionItems"></mwc-icon-button>
          </mwc-top-app-bar>
          <section class="container">
            ${this._renderPage()}
          </section>
        </main>
      </mwc-drawer>
    `;
  }

  _renderPage(data) {
    switch (this.page) {
      case 'home':
        return html`
          <page-home .bla="hello" @navigate=${this.__onNavClickedExternal}></page-home>
        `;
      case 'search':
        return html`
          <page-search @show-persons=${this.showPersons}></page-search>
        `;
      case 'familyTrees':
        return html`
          <page-family-trees @show-gedcom-persons=${this.showGedcomPersons}></page-family-trees>
        `;
      case 'results':
        return html`
          <page-search-results @navigate=${this.__onPersonSelected} .persons=${store.getState().persons}></page-search-results>
        `;
      case 'gedcomResults':
        return html`
          <page-gedcom-search-results @navigate=${this.__onPersonSelected} .persons=${store.getState().gedcomPersons}></page-gedcom-search-results>
        `;
      case 'person':
        return html`
          <page-person .person=${store.getState().person}></page-person>
        `;
      case 'contact':
        return html`
          <page-contact></page-contact>
        `;
      default:
        return html`
          <p>Page not found try going to <a href="#home">Home</a></p>
        `;
    }
  }

  __onPersonSelected(ev) {
    ev.preventDefault();
    this.page = ev.detail;
  }

  __onNavClickedExternal(ev) {
    ev.preventDefault();
    this.page = ev.detail;
  }

  __onNavClicked(ev) {
    ev.preventDefault();
    this.page = ev.currentTarget.id;
    this.toggleDrawer(ev);
  }

  __navClass(page) {
    return classMap({ active: this.page === page });
  }

}


