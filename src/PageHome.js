import { LitElement, html, css } from 'lit-element';
import { MyArticle } from './MyArticle.js';


export class PageHome extends LitElement {

  constructor() {
    super();
    this.articleDescription = 'Marknesse tulips';
    this.imageLocation = './assets/house.jpeg';
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
      .container {
        position: relative;
        max-width: 1250px; /* Maximum width */
        margin: 0 auto; /* Center it */
      }

      .container .content {
        position: absolute; /* Position the background text */
        bottom: 50%; /* At the bottom. Use top:0 to append it to the top */
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
        color: #f1f1f1; /* Grey text */
        width: 100%; /* Full width */
        padding: 20px; /* Some padding */
      }

    `;
  }

  render() {
    return html`
      <main class="container">
        <img src="/assets/house.jpeg" alt="Tulips" style="width:100%;">
        <section class="content">
          <h1>Welcome to the Etherton One Name Study</h1>
          <p>Discover more about your Etherton ancestors and roots</p>
        </section>
      </main>
    `;
  }

}

customElements.define('page-home', PageHome);
