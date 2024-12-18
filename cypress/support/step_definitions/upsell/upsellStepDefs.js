import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given('[Click] Top menu CRM and Sub menu Upsell', () => {
    cy.get(':nth-child(7) > .cursor-pointer').should('be.visible').click();
    cy.get('.nav-item-open > .nav > :nth-child(1) > .nav-link').should('be.visible').click();
    cy.wait(2000);
});

When('[Click] Request lead', () => {
    cy.get('.toobar-action > .btn').click();
});

When('[Click] Assign Tab', () => {
    cy.get(':nth-child(2) > .nav-link > .px-2').should('be.visible').click();
});

When('[Click] First order in assign page', () => {
    cy.get('[item-index="0"] > :nth-child(5)').should('be.visible').click();
})

When('[Click] Upsell', () => {
    cy.get('[data-test="btn-upsell"]').should('be.visible').click();
})

When('[Click] WON', () => {
    cy.get('[data-test="btn-upsell-won"]').should('be.visible').click();
    cy.get('[data-test="serach-product"] > .select2 > .selection > .select2-selection > #select2--container').click();
    cy.get('.select2-results__option--highlighted').click();
    cy.get('[data-test="btn-save-upsell-won"]').should('be.visible').click();
})

When('[Click] LOST', () => {
    cy.get('[data-test="btn-upsell-lost"]').should('be.visible').click();
    cy.get('[data-test="btn-save-reason-followup"]').should('be.visible').click();
})

When('[Check] toast fail', () => {
    cy.get('.toast', { timeout: 10000 }).should('be.visible');
    cy.get('.toast-message').should('be.visible').then(($toast) => {
        const toastMessage = $toast.text();
        expect(toastMessage).to.match(/รายการต้องน้อยกว่า 5 รายการ/);
    });
})