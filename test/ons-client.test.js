import { html, fixture, expect } from '@open-wc/testing';

import '../src/ons-client.js';

describe('OnsClient', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <ons-client></ons-client>
    `);
  });

  it('test config', () => {
    expect(true).to.equal(true);
  });

//  it('renders a h1', () => {
//    const h1 = element.shadowRoot.querySelector('mwc-drawer');
//    expect(h1).to.exist;
//   // expect(h1.textContent).to.equal('My app');
//  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible({ignoredRules: ['aria-allowed-role']});
  });
});
