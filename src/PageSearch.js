import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield';
import '@material/mwc-button';

export class PageSearch extends LitElement {

  static get styles() {
    return css`
      article {
        padding: 5%;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <section>
        <article>
          <mwc-textfield label="First Name"></mwc-textfield>
        </article>
        <article>
          <mwc-textfield label="Surname"></mwc-textfield>
        </article>
        <article>
          <mwc-button raised icon="search" label="Search"></mwc-button>
        </article>
      </section>
    `;
  }

}

customElements.define('page-search', PageSearch);
