import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';

// Then('[Click] Re-Order Selete Product {string} Tab {string} and Product {string}', (productType, configIndex, item) => {
//     cy.get('[data-test="btn-add-promotion"]').click(), cy.wait(2000);
//     if (productType === 'Simple') {
//       cy.get('[data-test="product-Simple"]').click(), cy.wait(2000);
//     } else if (productType === 'Config') {
//       cy.get('[data-test="product-Config"]').click(), cy.wait(2000);
  
//       const index = parseInt(configIndex.split(' ')[1]) - 1;
//       cy.get(`[item-index="${index}"] > .vuetable-td-component-checkbox > .align-items-center`).click();
//       cy.wait(2000);
//     }
  
//     const itemCount = parseInt(item.split(' ')[0]);
  
//     for (let i = 0; i < itemCount; i++) {
//       cy.get(`:nth-child(${i + 1}) > .vuetable-td-component-checkbox > input`).click();
//     }
//     cy.wait(1000);
//     cy.contains('button', 'เลือกสินค้า').click();
//     cy.wait(2000);
//   });

Then('[Click] Re-Order Select product by search: {string}', (searchProduct) => {
  cy.get('[data-test="search-product"] > div > .select2 > .selection > .select2-selection > #select2--container').scrollIntoView().should('be.visible').click();
  cy.wait(2000);
  cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(searchProduct);
  cy.wait(2000);
  cy.get('.select2-results__option > .align-items-center').click();
});