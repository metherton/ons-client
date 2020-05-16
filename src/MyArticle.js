import { LitElement, html, css } from 'lit-element';

export class MyArticle extends LitElement {

  static get styles() {
    return css`
      :host {
        position: relative;
        color: white;
      }

      p {
        position: absolute;
        bottom: 8px;
        left: 16px;
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
