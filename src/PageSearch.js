import { LitElement, html, css } from 'lit-element';

export class PageSearch extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      search page
    `;
  }

}

customElements.define('page-search', PageSearch);
