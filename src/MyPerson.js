import { html, css, LitElement } from 'lit-element';

export class MyPerson extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        text-align: center;
      }

      li {
        display: flex;
        justify-content: left;
        font-size: 0.8em;
      }

    `;
  }

  static get properties() {
    return {
      firstName: { type: String },
      surname: { type: String },
      place: { type: String },
      dateOfBirth: { type: String },
    };
  }

  constructor() {
    super();

  }

  render() {
      return html`
          <li>
            <section style="width: 130px;padding: 5px">${this.firstName}</section>
            <section style="margin-left: 5px;width: 120px;padding: 5px">${this.surname}</section>
            <section style="margin-left: 5px;width: 520px;padding: 5px">${this.place}</section>
            <section style="margin-left: 5px;;width: 130px;padding: 5px">${this.dateOfBirth}</section>
          </li>
      `;

  }
}
