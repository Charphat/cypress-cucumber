import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Given('User visits the login page {string}', (url) => {
//   cy.visit(url);
// });

// When('[Input] Email: {string} Password: {string}', (email, password) => {
//   cy.get(':nth-child(1) > .form-control')
//     .should('be.visible')
//     .type(email, {delay: 100});

//   cy.get(':nth-child(2) > .form-control')
//     .should('be.visible')
//     .type(password, {delay: 100});

//   cy.get('#LoginForm > :nth-child(4) > .btn')
//     .should('be.visible')
//     .click()
//     cy.wait(2000);
// });


Given('User visits the login page {string}', (url) => {
  cy.visit(url);
});

When('[Input] Email: {string} Password: {string} Store Name: {string} Domain: {string}', (email, password, storeName, domain) => {
  cy.login(email, password, storeName, domain);
});