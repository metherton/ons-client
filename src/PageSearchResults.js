import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-list';

import { createStore } from 'redux'
import onsApp from './reducers'

import store from './store/configureStore';
import {
  addPerson,
  setInitialPersons,
  toggleTodo,
  setPerson,
  VisibilityFilters
} from './actions'

export class PageSearchResults extends LitElement {

  static get styles() {
    return css`
      :host {
        width: 100%;
      }

      article {
        padding: 5%;
      }
      mwc-list {
        text-align: left;
        width: 100%;
        margin-top: -8px;
      }
      .person {
        height: 100%;
      }
      .person p, h3 {
        padding: 0px;
        margin: 0px;
      }
      mwc-list-item {
        padding-top: 8px;
        padding-bottom: 8px;
      }
    `;
  }

  static get properties() {
    return {
      persons: {type: Array},
      firstName: {type: String},
      surname: {type: String},
    };
  }

  constructor() {
    super();
    this.persons = [];
  }

  __onNavClicked(ev) {
    const person = this.persons.find(p => p.id === ev.currentTarget.id);
    const father = this.persons.filter(p => p.childRelation.includes(person.parentRelation)).find(m => m.sex === "M")
    const mother = this.persons.filter(p => p.childRelation.includes(person.parentRelation)).find(m => m.sex === "F")
    if (father) {
      person.father = {name: father.firstName + " " + father.surname, id: father.id}
    } else {
      person.father = {};
    }
    if (mother) {
      person.mother = {name: mother.firstName + " " + mother.surname, id: mother.id}
    } else {
      person.mother = {};
    }
    store.dispatch(setPerson(person));
    this.dispatchEvent(new CustomEvent('navigate', {detail: 'person'}));
  }

  render() {
    return html`
      <mwc-list>
            ${this.persons.filter(person => person.surname !== "" && person.surname.toUpperCase() === "ETHERTON" && person.firstName !== "").sort(
            (a, b) => {
              if (a.firstName.toUpperCase() < b.firstName.toUpperCase()) {
                return -1;
              } if (a.firstName.toUpperCase() > b.firstName.toUpperCase()) {
                return 1;
              }
                return 0;

            }
            ).map(person => html`
              <mwc-list-item id=${person.id} @click=${this.__onNavClicked} class="person">
                <h3>${person.firstName}&nbsp;${person.surname}</h3>
                <p>Born:&nbsp;${person.place}&nbsp;${person.dateOfBirth}</p>
              </mwc-list-item>
              <li divider role="separator"></li>
            `)}
            ${this.persons.filter(person => person.surname !== "" && person.surname.toUpperCase() !== "ETHERTON" && person.firstName !== "").map(person => html`
              <mwc-list-item id=${person.id} @click=${this.__onNavClicked} class="person">
                <h3>${person.firstName}&nbsp;${person.surname}</h3>
                <p>Born:&nbsp;${person.place}&nbsp;${person.dateOfBirth}</p>
              </mwc-list-item>
              <li divider role="separator"></li>
            `)}
      </mwc-list>
    `;
  }

}

customElements.define('page-search-results', PageSearchResults);
