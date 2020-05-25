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
import { PageSearchResults } from './PageSearchResults.js';

import { createStore } from 'redux';

var defaultState = {
  persons: []
};
function persons(state = defaultState, action) {
  if (action.type === 'ADD') {
    state.persons[state.persons.length] = {id: action.data};
  }
  return state;
}

var store = createStore(persons);
store.subscribe(function() {
  console.log('store', store.getState());
})
store.dispatch({type: 'ADD', data: Math.random()});
store.dispatch({type: 'ADD', data: Math.random()});
store.dispatch({type: 'ADD', data: Math.random()});


export class OnsClient extends LitElement {
  static get properties() {
    return {
      page: { type: String },
      persons: {type: Array},
    };
  }

  constructor() {
    super();
    this.page = 'home';
    this.persons = [];
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

  showPersons(e) {
    this.page = 'results';
    this.persons = e.detail.persons;
    this._renderPage()
  }

  render() {
    return html`
      <mwc-drawer id="leftdrawer" type="dismissible">
        <mwc-list>
          <mwc-list-item id="home" @click=${this.__onNavClicked} graphic="icon">
            <span>Home</span>
            <mwc-icon slot="graphic">home</mwc-icon>
          </mwc-list-item>
          <mwc-list-item id="search" @click=${this.__onNavClicked} graphic="icon">
            <span>Search & Browse</span>
            <mwc-icon slot="graphic">search</mwc-icon>
          </mwc-list-item>
          <mwc-list-item id="familyTrees" @click=${this.__onNavClicked}  graphic="icon">
            <span>Family Trees</span>
            <mwc-icon slot="graphic">nature_people</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>DNA</span>
            <mwc-icon slot="graphic">local_pharmacy</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>Contact</span>
            <mwc-icon slot="graphic">contact_support</mwc-icon>
          </mwc-list-item>
        </mwc-list>

        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button @click="${this.toggleDrawer}" slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Etherton ONS</div>
            <mwc-icon-button icon="search" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="help" slot="actionItems"></mwc-icon-button>
          </mwc-top-app-bar>
          <main class="container">
            ${this._renderPage()}
          </main>
        </div>
      </mwc-drawer>
    `;
  }

  _renderPage() {
    switch (this.page) {
      case 'home':
        return html`
          <page-home></page-home>
        `;
      case 'search':
        return html`
          <page-search @show-persons=${this.showPersons}></page-search>
        `;
      case 'familyTrees':
        return html`
          <page-family-trees @show-persons=${this.showPersons}></page-family-trees>
        `;
      case 'results':
        return html`
          <page-search-results .persons=${this.persons}></page-search-results>
        `;
      default:
        return html`
          <p>Page not found try going to <a href="#home">Home</a></p>
        `;
    }
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


