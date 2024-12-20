Cypress.Commands.add('login', (url,email, password, storeName, domain) => {
    cy.session([url, email, password], () => {
      cy.visit(url);
      cy.get(':nth-child(1) > .form-control')
        .should('be.visible')
        .type(email, { delay: 100 });
      cy.get(':nth-child(2) > .form-control')
        .should('be.visible')
        .type(password, { delay: 100 });
      cy.get('#LoginForm > :nth-child(4) > .btn')
        .should('be.visible')
        .click();
      cy.wait(2000);

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
    cy.visit(domain);
    cy.wait(2000);
  });