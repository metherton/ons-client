import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import '@material/mwc-button';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import '@material/mwc-button';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';


export class OnsClient extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
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

      main {
        flex-grow: 1;
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

      section.container {
        display: flex;
        flex-flow: row wrap;
      }

      article.card {
        color: white;
        background-size: contain;
        background-image: url('/images/tulips.jpg')
      }

    `;
  }

  toggleDrawer(e) {
    this.shadowRoot.getElementById('leftdrawer').open = !this.shadowRoot.getElementById('leftdrawer').open;
  }

  render() {
    return html`
      <mwc-drawer id="leftdrawer" type="dismissible">

        <mwc-list>
          <mwc-list-item graphic="icon">
            <span>Home</span>
            <mwc-icon slot="graphic">home</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>Search & Browse</span>
            <mwc-icon slot="graphic">search</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>Family Trees</span>
            <mwc-icon slot="graphic">nature_people</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>DNA</span>
            <mwc-icon slot="graphic">local_pharmacy</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="icon">
            <span>Contact</span>
            <mwc-icon slot="graphic">contact_support</mwc-icon>
          </mwc-list-item>
        </mwc-list>

        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button @click="${this.toggleDrawer}" slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Etherton ONS</div>
            <mwc-icon-button icon="search" slot="actionItems"></mwc-icon-button>
            <mwc-icon-button icon="help" slot="actionItems"></mwc-icon-button>
          </mwc-top-app-bar>
          <div class="container">
            <article class="card">Marknesse</article>
          </div>
        </div>
      </mwc-drawer>
    `;
  }
}
