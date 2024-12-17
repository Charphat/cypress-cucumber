import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
//UAT Gochat (TEST52)
Then('Choose product to order, Product type: {string} UAT', (productType) => {
    if (productType === 'Simple') {
      cy.get('[data-test="product-Simple"]').click();
      cy.wait(2000);
    } else if (productType === 'Config') {
      cy.get('[data-test="product-Config"]').click();
      cy.wait(2000);
      cy.get('[item-index="0"] > .vuetable-td-component-checkbox > .align-items-center').click();
      cy.wait(2000);
    }
  });
  Then('Choose product to order, Product type: {string} Prod', (productType) => {
    if (productType === 'Simple') {
      cy.get('[data-test="product-Simple"]').click();
      cy.wait(2000);
    } else if (productType === 'Config') {
      cy.get('[data-test="product-Config"]').click();
      cy.wait(2000);
      cy.get('[item-index="0"] > .vuetable-td-component-checkbox > .align-items-center').click();
      cy.wait(2000);
  
    }
  });

Then('List of products in this order, Simple: {string} UAT', (item) => {
    if (item === '1 item') {
      cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="0"] > .vuetable-td-component-checkbox > input').click();
    } else if (item === '2 item') {
      cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="0"] > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="1"] > .vuetable-td-component-checkbox > input').click();
    }
    cy.wait(1500);
    cy.get('.text-center > .btn-primary').click();
    cy.wait(2000);
  });
  Then('List of products in this order, Simple: {string} Prod', (item) => {
    if (item === '1 item') {
      cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="0"] > .vuetable-td-component-checkbox > input').click();
    } else if (item === '2 item') {
      cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="0"] > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="1"] > .vuetable-td-component-checkbox > input').click();
    }
    cy.wait(1500);
    cy.get('.text-center > .btn-primary').click();
    cy.wait(2000);
  });

  Then('List of products in this order, Config: {string} UAT', (item) => {
    if (item === '1 item') {
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '2 item') {
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '3 item') {
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(3) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '4 item') {
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(3) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(4) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '4 item') {
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(3) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(4) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product32 > .vuetable > .vuetable-body > :nth-child(5) > .vuetable-td-component-checkbox > input').click();
    }
    cy.wait(1500);
    cy.get('.text-center > .btn-primary').click();
    cy.wait(2000);
  });
  Then('List of products in this order, Config: {string} Prod', (item) => {
    if (item === '1 item') {
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '2 item') {
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '3 item') {
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(3) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '4 item') {
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(3) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(4) > .vuetable-td-component-checkbox > input').click();
    } else if (item === '4 item') {
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(1) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(2) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(3) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(4) > .vuetable-td-component-checkbox > input').click();
      cy.get('#table_row_product2 > .vuetable > .vuetable-body > :nth-child(5) > .vuetable-td-component-checkbox > input').click();
    }
    cy.wait(1500);
    cy.get('.text-center > .btn-primary').click();
    cy.wait(2000);
  });
  //UAT Gochat (TEST52)