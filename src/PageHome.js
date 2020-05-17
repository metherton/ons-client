import { LitElement, html, css } from 'lit-element';
import { MyArticle } from './MyArticle.js';


export class PageHome extends LitElement {

  constructor() {
    super();
    this.articleDescription = 'Marknesse tulips';
    this.imageLocation = './assets/tulips.jpg';
  }

  static get properties() {
    return {
      articleDescription: { type: String },
      imageLocation: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
      }

      mwc-drawer {
        width: 100%;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

      main.container {
        display: flex;
        flex-flow: row wrap;
      }

      div.article {
        width: 25%;
        padding: 1%;
      }

    `;
  }

  render() {
    return html`
           home page

    `;
  }

}

customElements.define('page-home', PageHome);
