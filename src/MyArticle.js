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
      title1: { type: String },
    };
  }

  render() {
    return html`
      <section>
        <img src='./assets/tulips.jpg' style='width: 100%'>
        <p>${this.title1}</p>
      </section>
    `;
  }

}

customElements.define('my-article', MyArticle);
