import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-linear-progress';

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

export class PageSearch extends LitElement {

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
      }

      article {
        padding: 1% 1% 1% 2%;
      }

    `;
  }

  static get properties() {
    return {
      firstName: {type: String},
      surname: {type: String},
    };
  }

  constructor() {
    super();
    this.persons = [];
  }

  updateFirstName(e) {
    this.firstName = e.target.value;
  }

  updateSurname(e) {
    this.surname = e.target.value;
  }

  handleClick(e) {
    const firstName = this.shadowRoot.getElementById('firstName');
    const surname = this.shadowRoot.getElementById('surname');
    const submit = this.shadowRoot.getElementById('submit');
    firstName.disabled = true;
    surname.disabled = true;
    submit.disabled = true;
    const progressBar = this.shadowRoot.getElementById('progress');
    progressBar.open();
    const url = new URL('http://localhost:8080/persons');
   // const url = new URL('http://www.martinetherton.com:8080/persons');
    const params = {firstName: this.firstName, surname: this.surname};
    Object.keys(params).forEach(key => {if (params[key]) {url.searchParams.append(key, params[key])}})
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        progressBar.close();
        store.dispatch(setInitialPersons(response));
        let event = new CustomEvent('show-persons', {
          detail: {
          }
        });
        this.dispatchEvent(event);
      });
  }

  render() {
    return html`
      <section id="container">
        <article>
          <mwc-textfield id="firstName" @change="${this.updateFirstName}"  label="First Name"></mwc-textfield>
        </article>
        <article>
          <mwc-textfield id="surname" @change="${this.updateSurname}" label="Surname"></mwc-textfield>
        </article>
        <article>
          <mwc-button id="submit" @click="${this.handleClick}" raised icon="search" label="Search"></mwc-button>
        </article>
      </section>
      <div style="width: 50%; text-align: center">
        <mwc-linear-progress id="progress" closed progress="1"></mwc-linear-progress>
      </div>
    `;
  }

}

customElements.define('page-search', PageSearch);
