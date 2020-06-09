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
      <section>
        <section>
          <article>First Name:</article><article>${this.person.firstName}</article><article>Surname:</article><article>${this.person.surname}</article>
        </section>
        <section>
          <article>Birth Date:</article><article>${this.person.dateOfBirth}</article><article>Place:</article><article>${this.person.place}</article>
        </section>
        <section>
          <article>Death Date:</article><article>${this.person.dateOfDeath}</article><article>Place:</article><article>${this.person.placeOfDeath}</article>
        </section>
        <section>
          <article>Father:</article><article>${this.person.father.name}</article><article>Mother:</article><article>${this.person.mother.name}</article>
        </section>
      </section>
    `;
  }

}

customElements.define('page-person', PagePerson);
