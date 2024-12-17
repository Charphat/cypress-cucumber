import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

//ร้านนัท
// Given ('Confirm and go in store', () => {
//     cy.get(':nth-child(2) > .card-body').should('be.visible').click();
//     cy.get('.swal2-popup').should('be.visible');
//     cy.get('.swal2-confirm').should('be.visible').click();
//     cy.wait(2000);
// });

//ร้านมอส
Given ('Confirm and go in store: {string}', (storeName) => {
    cy.contains(storeName).should('be.visible').click();
    cy.get('.swal2-popup').should('be.visible');
    cy.get('.swal2-confirm').should('be.visible').click();
    cy.wait(2000);

    cy.get('body').then(($body) => {
        if ($body.find('.swal2-popup').length > 0) {
          cy.get('.swal2-cancel').should('be.visible').click({ force: true });
          cy.wait(1500);
        }
      });
});
//UAT Gochat (TEST52)
//'Ball Origin (No.1)'

