import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('[Click] More action and {string}', (moreAction) => {
    cy.get('[data-test="btn-more-action"]').should('be.visible').click().then(() => {
        if (moreAction === 'Re-Order') {
            cy.get('[data-test="btn-reorder"]').should('be.visible').click();
        } else if (moreAction === 'Edit') {
            cy.get('[data-test="btn-action-edit-order"]').should('be.visible').click();
        }
        cy.wait(3000);
    });
});