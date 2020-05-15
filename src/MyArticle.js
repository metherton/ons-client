import { LitElement, html, css } from 'lit-element';

export class MyArticle extends LitElement {

  static get styles() {
    return css`
      p {
        position: absolute;
        left: 1%;
        bottom: 1%;
        color: white;
        padding-left: 1%;
        padding-right: 1%;
      }
    `;
  }

  render() {
    return html`
      <section>
        <img src='./assets/tulips.jpg' style='width: 100%'>
        <p>Marknesse tulips</p>
      </section>
    `;
  }

}

customElements.define('my-article', MyArticle);
