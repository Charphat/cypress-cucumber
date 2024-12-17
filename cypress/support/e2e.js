// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('log:added', (options) => {
    if (options.instrument === 'command' && options.name === 'xhr') {
      return false; // ไม่แสดง request logs
    }
  });

// cypress/support/e2e.js หรือ cypress/support/index.js

beforeEach(() => {
    cy.intercept('POST', 'https://www.google-analytics.com/**', { log: false });
      // ปิด log ของ XHR request ทั้งหมด
  cy.intercept({ method: 'GET', url: '**' }, { log: false });
  cy.intercept({ method: 'POST', url: '**' }, { log: false });
  cy.intercept({ method: 'PUT', url: '**' }, { log: false });
  cy.intercept({ method: 'DELETE', url: '**' }, { log: false });
  });