import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';

export class PageSearch extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <mwc-textfield label="My Textfield"></mwc-textfield>
    `;
  }

}

customElements.define('page-search', PageSearch);
