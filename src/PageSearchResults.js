import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-list';

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
              <mwc-list-item twoline>
                <span>${person.firstName}&nbsp;${person.surname}</span>
                <span slot="secondary">${person.place}&nbsp;${person.dateOfBirth}</span>
              </mwc-list-item>
              <li divider role="separator"></li>
            `)}
            ${this.persons.filter(person => person.surname !== "" && person.surname.toUpperCase() !== "ETHERTON" && person.firstName !== "").map(person => html`
              <mwc-list-item twoline>
                <span>${person.firstName}&nbsp;${person.surname}</span>
                <span slot="secondary">${person.place}&nbsp;${person.dateOfBirth}</span>
              </mwc-list-item>
              <li divider role="separator"></li>
            `)}
      </mwc-list>
    `;
  }

}

customElements.define('page-search-results', PageSearchResults);
