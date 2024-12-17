import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Click on top menu Order and sub menu Order', () => {
    cy.get('.nav-sidebar > :nth-child(3) > .cursor-pointer').should('be.visible').click();
    cy.get('.nav-item-open > .nav > :nth-child(1) > .nav-link').should('be.visible').click();
    cy.wait(2000);
});

Given('Refresh on page before test', () => {
    cy.reload();
});