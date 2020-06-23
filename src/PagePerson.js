import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-linear-progress';
import store from './store/configureStore';
import '@material/mwc-list';
import '@material/mwc-button';

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
//        background: lightcyan;
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
      actualFirstName: {type: Object},
      actualSurname: {type: Object},
      actualAddress: {type: Object},
      actualCity: {type: Object},
      actualCountry: {type: Object},
      actualBirthDate: {type: Object}
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.actualFirstName = this.person && this.person.firstName;
    this.actualSurname = this.person && this.person.surname;
    this.actualAddress = this.person && this.person.place;
    this.actualCity = 'London';
    this.actualCountry = 'England';

  }

  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  async executeAddPerson() {
    try {
      const data = await (this.postData('http://localhost:8080/persons', { firstName: this.actualFirstName, surname: this.actualSurname, dateOfBirth: this.actualBirthDate, address: this.actualAddress, city: this.actualCity, country: this.actualCountry}));
      //const data = await (this.postData('http://www.martinetherton.com:8080/persons', { firstName: this.firstName, surname: this.surname, dateOfBirth: Date.parse(this.dateOfBirth), address: this.address, city: this.city, country: this.country }));

      console.log(JSON.stringify(data)); // JSON-string from `response.json()` call

    } catch (error) {
      console.error(error);
    }
  }

  async handleClick(e) {
    console.log(e.target);
    await this.executeAddPerson();
  }

  handleDateChange(e) {
    this.actualBirthDate = Date.parse(e.currentTarget.value);
  }

  handleAddressChange(e) {
    this.actualAddress = e.currentTarget.value;
  }

  handleCityChange(e) {
    this.actualCity = e.currentTarget.value;
  }

  handleCountryChange(e) {
    this.actualCountry = e.currentTarget.value;
  }

  render() {
    return html`
      <section class="container">
        <mwc-list>
          <mwc-list-item>${this.person.firstName}&nbsp;${this.person.surname}</mwc-list-item>
          <mwc-list-item>Born:&nbsp;${this.person.dateOfBirth}&nbsp;at&nbsp;${this.person.place}&nbsp;<input @change="${this.handleAddressChange}" type="text" value="${this.actualAddress}" /></mwc-list-item>
          <mwc-list-item>Actual date:&nbsp;<input @change="${this.handleDateChange}" type="date" id="start" name="trip-start"
                                                  value="${this.actualBirthDate}"
                                                  min="1100-01-01" max="2018-12-31"></mwc-list-item>
          ${this.person.dateOfDeath == 'unknown'?html``:html`<mwc-list-item>Died:&nbsp;${this.person.dateOfDeath}&nbsp;at&nbsp;${this.person.placeOfDeath}</mwc-list-item>`}
          <mwc-list-item>Father:&nbsp;${this.person.father.name}</mwc-list-item>
          <mwc-list-item>Mother:&nbsp;${this.person.mother.name}</mwc-list-item>
          <mwc-list-item><mwc-button @click="${this.handleClick}" raised label="Save Person"></mwc-button></mwc-list-item>
        </mwc-list>
      </section>
    `;
  }

}

customElements.define('page-person', PagePerson);
