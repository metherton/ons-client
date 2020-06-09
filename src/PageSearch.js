import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-linear-progress';

import { createStore } from 'redux'
import onsApp from './reducers'

import store from './store/configureStore';

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
    this.firstName = '';
    this.surname = '';
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
//    const section = this.shadowRoot.getElementById('container');
//    section.classList.add('clicked');
    const request = 'http://www.martinetherton.com:8080/gedcom/london1?firstName=' + this.firstName + '&surname=' + this.surname;
    fetch(request)
      .then(response => response.json())
      .then((response) => {
        progressBar.close();
     //   this.persons = response[0];
        store.dispatch({type: 'SET_INITIAL_PERSONS', data: response[0]});
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
