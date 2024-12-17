import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User visits the login page {string}', (url) => {
  cy.visit(url);
});

When('Input email: {string} and password: {string}', (email, password) => {
  cy.get(':nth-child(1) > .form-control').should('be.visible').type(email, {delay: 100});
  cy.get(':nth-child(2) > .form-control').should('be.visible').type(password, {delay: 100});
});

When('User click the login button', () => {
  cy.get('#LoginForm > :nth-child(4) > .btn').should('be.visible').click(), cy.wait(2000);
});

Then('Should be logged in successfully', () => {
  cy.url().should('not.include', '/login');
  cy.contains('Fake Testing').should('be.visible');
});

// Given('Testing on UAT: {string}, Email: {string}, Pass: {string}', (url, email, password) => {
//   cy.session('loginSession', () => {
//     cy.visit(url);
//     cy.get(':nth-child(1) > .form-control').should('be.visible').type(email);
//     cy.get(':nth-child(2) > .form-control').should('be.visible').type(password);
//     cy.get('#LoginForm > :nth-child(4) > .btn').should('be.visible').click();
//     cy.wait(2000);
//     // cy.visit('https://account.uatgosaas.app/store');
//   });
//   cy.visit('https://faketesting.uatgosaas.app');
// });

// When('Navigate to page: {string}', (destinationUrl) => {
//   cy.visit(destinationUrl); // ใช้ URL ที่ส่งมาเพื่อไปยังหน้าที่ต้องการ
// });