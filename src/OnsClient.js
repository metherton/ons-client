import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import '@material/mwc-button';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import '@material/mwc-button';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';

import { PageHome } from './PageHome.js';
import { PageSearch } from './PageSearch.js';


export class OnsClient extends LitElement {
  static get properties() {
    return {
      page: { type: String },
    };
  }

  constructor() {
    super();
    this.page = 'home';
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

      mwc-top-app-bar {
        --mdc-theme-primary: black;
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
          <mwc-list-item id="home" @click=${this.__onNavClicked} graphic="icon">
            <span>Home</span>
            <mwc-icon slot="graphic">home</mwc-icon>
          </mwc-list-item>
          <mwc-list-item id="search" @click=${this.__onNavClicked} graphic="icon">
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
          <main class="container">
            ${this._renderPage()}
          </main>
        </div>
      </mwc-drawer>
    `;
  }

  _renderPage() {
    switch (this.page) {
      case 'home':
        return html`
          <page-home></page-home>
        `;
      case 'search':
        return html`
          <page-search></page-search>
        `;
      default:
        return html`
          <p>Page not found try going to <a href="#home">Home</a></p>
        `;
    }
  }

  __onNavClicked(ev) {
    ev.preventDefault();
    this.page = ev.currentTarget.id;
    this.toggleDrawer(ev);
  }

  __navClass(page) {
    return classMap({ active: this.page === page });
  }

}


