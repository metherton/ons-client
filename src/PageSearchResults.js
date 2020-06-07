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
              <mwc-list-item class="person">
                <h3>${person.firstName}&nbsp;${person.surname}</h3>
                <p>Sex:&nbsp;${person.sex}</p>
                <p>Born:&nbsp;${person.place}&nbsp;${person.dateOfBirth}</p>
                <p>Died:&nbsp;${person.placeOfDeath}&nbsp;${person.dateOfDeath}</p>
                <p>Father:&nbsp;${person.parentRelation}</p>
              </mwc-list-item>
              <li divider role="separator"></li>
            `)}
            ${this.persons.filter(person => person.surname !== "" && person.surname.toUpperCase() !== "ETHERTON" && person.firstName !== "").map(person => html`
              <mwc-list-item class="person">
                <h3>${person.firstName}&nbsp;${person.surname}</h3>
                <p>Sex:&nbsp;${person.sex}</p>
                <p>Born:&nbsp;${person.place}&nbsp;${person.dateOfBirth}</p>
                <p>Died:&nbsp;${person.placeOfDeath}&nbsp;${person.dateOfDeath}</p>
                <p>Father:&nbsp;${person.parentRelation}</p>
              </mwc-list-item>
              <li divider role="separator"></li>
            `)}
      </mwc-list>
    `;
  }

}

customElements.define('page-search-results', PageSearchResults);
