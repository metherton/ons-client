import { LitElement, html, css } from 'lit-element';
import '@material/mwc-linear-progress';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import { createStore } from 'redux'
import onsApp from './reducers'

import store from './store/configureStore';
import {
  addPerson,
  setInitialGedcomPersons,
  toggleTodo,
  setPerson,
  VisibilityFilters
} from './actions'

export class PageContact extends LitElement {

  static get styles() {
    return css`

      mwc-list {
        width: 100%;
      }
      mwc-list-item {
        width: 100%;
      }
      mwc-list-item * {
        width: 100%;
      }

      mwc-textfield * {
        width: 100%;
      }

      input {
        width: 90%;
        background: red;
      }

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

      section {
        margin-left: 20px;
      }
      li {
        padding-top: 1%;
        padding-bottom: 1%;
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
    //const request = 'http://www.martinetherton.com:8080/gedcom/' + e.currentTarget.id;
    const request = 'http://localhost:8080/gedcom/' + e.currentTarget.id;
    const list = this.shadowRoot.getElementById('list');
    const london1 = this.shadowRoot.getElementById('london1');
    london1.disabled = true;
    const london2 = this.shadowRoot.getElementById('london2');
    london2.disabled = true;
    const sussex1 = this.shadowRoot.getElementById('sussex1');
    sussex1.disabled = true;
    const sussex2 = this.shadowRoot.getElementById('sussex2');
    sussex2.disabled = true;
    const usa1 = this.shadowRoot.getElementById('usa1');
    usa1.disabled = true;
    const progressBar = this.shadowRoot.getElementById('progress');
    list.disabled = true;
    progressBar.open();
    fetch(request)
      .then(response => response.json())
      .then((response) => {
        progressBar.close();
        store.dispatch(setInitialGedcomPersons(response));
        let event = new CustomEvent('show-gedcom-persons', {
          detail: {}
        });
        this.dispatchEvent(event);
      });
  }

  render() {
    return html`
      <section>
        <h3>Contact</h3>
        <mwc-list id="list" multi>
            <mwc-list-item>

            </mwc-list-item>
            <mwc-list-item>
                <mwc-textfield id="firstName" @change="${this.updateFirstName}"  label="Your Name"></mwc-textfield>
            </mwc-list-item>

            <mwc-list-item>
                <mwc-textfield id="firstName" @change="${this.updateFirstName}"  label="Your Email"></mwc-textfield>
            </mwc-list-item>

            <mwc-list-item style="height: 100%;">
                <mwc-textarea label="Your Question"></mwc-textarea>
            </mwc-list-item>

            <mwc-list-item @click="${this.handleClick}" id="sussex2" graphic="email">
              <mwc-button id="submit" @click="${this.handleClick}" raised label="Send"></mwc-button>
            </mwc-list-item>

        </mwc-list>
      </section>
    `;
  }

}

customElements.define('page-contact', PageContact);
