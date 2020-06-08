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

      article {
        padding: 1% 1% 1% 2%;
      }

    `;
  }

  static get properties() {
    return {
      person: {type: String},
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      show details for person ${this.person}
    `;
  }

}

customElements.define('page-person', PagePerson);
