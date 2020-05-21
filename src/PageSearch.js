import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-linear-progress';

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
    const request = 'http://www.martinetherton.com:8080/persons?firstName=' + this.firstName + '&surname=' + this.surname;
    fetch(request)
      .then(response => response.json())
      .then((response) => {
        progressBar.close();
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
      <mwc-linear-progress id="progress" closed indeterminate></mwc-linear-progress>
    `;
  }

}

customElements.define('page-search', PageSearch);
