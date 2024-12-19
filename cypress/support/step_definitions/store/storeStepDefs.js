import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given ('Store Name: {string}', (storeName) => {
    cy.contains(storeName).should('be.visible').click();
    cy.get('.swal2-popup').should('be.visible');
    cy.get('.swal2-confirm').should('be.visible').click();
    cy.wait(2000);

    cy.get('body').then(($body) => {
        if ($body.find('.swal2-popup').length > 0) {
          cy.get('.swal2-cancel').should('be.visible').click({ force: true });
          cy.wait(2000);
        }
      });
});