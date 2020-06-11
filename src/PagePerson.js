import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-linear-progress';
import store from './store/configureStore';

export class PagePerson extends LitElement {

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

      section.container {
        background: lightcyan;
        margin: 10px;
        font-size: 0.8em;
      }

      section.row {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
      }

      article {
        padding: 5px;
      }

      .col1 {
        flex: 1%;
      }

      .col2 {
        flex: 5%;
      }

      .col3 {
        flex: 1%;
        margin-left: 20px;
      }

      .col4 {
        flex: 40%;
      }

    `;
  }

  static get properties() {
    return {
      person: {type: Object},
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <section class="container">
        <section class="row">
          <article class="col1">First Name:</article><article class="col2">${this.person.firstName}</article><article class="col3">Surname:</article><article class="col4">${this.person.surname}</article>
        </section>
        <section class="row">
          <article class="col1">Birth Date:</article><article class="col2">${this.person.dateOfBirth}</article><article class="col3">Place:</article><article class="col4">${this.person.place}</article>
        </section>
        <section class="row">
          <article class="col1">Death Date:</article><article class="col2">${this.person.dateOfDeath}</article><article class="col3">Place:</article><article class="col4">${this.person.placeOfDeath}</article>
        </section>
        <section class="row">
          <article class="col1">Father:</article><article class="col2">${this.person.father.name}</article><article class="col3">Mother:</article><article class="col4">${this.person.mother.name}</article>
        </section>
      </section>
    `;
  }

}

customElements.define('page-person', PagePerson);
