import { LitElement, html, css } from 'lit-element';

export class PageHome extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      home page
    `;
  }

}

customElements.define('page-home', PageHome);
