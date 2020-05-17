import { LitElement, html, css } from 'lit-element';

export class MyArticle extends LitElement {

  static get styles() {
    return css`
      :host {
        position: relative;
        color: white;
        display: block;
        width: 100%;
      }

      p {
        position: absolute;
        bottom: 8px;
        left: 16px;
      }
    `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      imageLocation: { type: String },
      articleDescription: { type: String },
    };
  }

  render() {
    return html`
      <section>
        <img src=${this.imageLocation} style='width: 100%'>
        <p>${this.articleDescription}</p>
      </section>
    `;
  }

}

customElements.define('my-article', MyArticle);
