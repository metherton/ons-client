import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';

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
        padding: 1%;
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
    const request = 'http://www.martinetherton.com:8080/persons?firstName=' + this.firstName + '&surname=' + this.surname;
    fetch(request)
      .then(response => response.json())
      .then((response) => {
        this.persons = response[0];
        let event = new CustomEvent('show-persons', {
          detail: {
            persons: this.persons
          }
        });
        this.dispatchEvent(event);
      });
  }

  render() {
    return html`
      <section>
        <article>
          <mwc-textfield @change="${this.updateFirstName}"  label="First Name"></mwc-textfield>
        </article>
        <article>
          <mwc-textfield @change="${this.updateSurname}" label="Surname"></mwc-textfield>
        </article>
        <article>
          <mwc-button @click="${this.handleClick}" raised icon="search" label="Search"></mwc-button>
        </article>
      </section>
    `;
  }

}

customElements.define('page-search', PageSearch);
