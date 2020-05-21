import { LitElement, html, css } from 'lit-element';
import { MyArticle } from './MyArticle.js';
import '@material/mwc-list';

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
        max-width: 100%; /* Maximum width */
        margin: 0 auto; /* Center it */
      }

      .container .content {
        position: absolute; /* Position the background text */
        bottom: 50%; /* At the bottom. Use top:0 to append it to the top */
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
        color: #f1f1f1; /* Grey text */
        width: 100%; /* Full width */
      }

      mwc-list {
        width: 100%;
        font-weight: bold;
      }
      mwc-list-item {
        font-weight: bold;
      }

    `;
  }

  render() {
    return html`
    <mwc-list>
      <mwc-list-item style="height: 100%;">
        <main class="container">
          <img src="/assets/house.jpeg" alt="Tulips" style="width:100%;">
          <section class="content">
            <h1>Etherton One Name Study</h1>
            <p>Learn about your Etherton ancestors and roots</p>
          </section>
        </main>
      </mwc-list-item>
      <mwc-list-item>Search All Records</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item>Search Births, Marriages & Deaths</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item>Search Census & Electoral Rolls</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item>Search Etherton family trees</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item>Explore our Etherton DNA project</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item>Contact Us</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item>About Us</mwc-list-item>
      <li divider role="separator"></li>
      <mwc-list-item style="height: 100%;">
        <main class="container">
          <img src="/assets/banner_web.gif" alt="Guild of One Name Studies"">
        </main>
      </mwc-list-item>
    </mwc-list>
    `;
  }

}

customElements.define('page-home', PageHome);
