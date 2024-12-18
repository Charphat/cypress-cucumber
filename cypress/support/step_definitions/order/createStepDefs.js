import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import customer from '../../../fixtures/customerData';

Given('[Click] Create Order', () => {
  cy.get('[data-test="btn-create-order"]').click();
  cy.wait(2000);
});

When('[Input] Address Auto spread: Customer Row {int}', (rowCustomer) => {
  const customerData = customer[rowCustomer - 1];
  if (!customerData) {
    throw new Error(`No customer data found for row ${rowCustomer}`);
  }
  cy.get('[data-test="address-text-area"]').should('be.visible').type(customerData, { delay: 50 });
  cy.wait(1500);
  cy.get('[data-test="spread-it"]').click();
  cy.wait(2500);
});

Then('[Click] Payment: {string}', (paymentMethod) => {
  if (paymentMethod === 'COD') {
    cy.get('[data-test="method-COD"]').click();
  } else if (paymentMethod === 'Bank') {
    cy.get('[data-test="method-Bank Transfer"]').click();
  }
  cy.wait(1500);
});

// Then('If Bank Tranfers have to amount: {string}', (amount) => {
//   cy.get('[data-test="order-amount"]').type(amount);
//   cy.wait(1500);
// });

Then('[Click] Mark As Confirm Payment', () => {
  cy.get('[data-test="checkbox-confirm-payment"]').click();
  cy.wait(1500);
});

Then('[Click] Toggle Add payment', () => {
  cy.get('.v-switch-core').click();
  cy.wait(1500);
});

Then('[Click] Mark As Confirm Order', () => {
  cy.get('[data-test="checkbox-confirm-cod"]').click();
  cy.wait(1500);
});

Then('[Click] Selete Products Promotions', () => {
  cy.get('[data-test="btn-add-promotion"]').click();
  cy.wait(2000);
});

Then('[Click] Product {string} Tab', (productType) => {
  if (productType === 'Simple') {
    cy.get('[data-test="product-Simple"]').click();
    cy.wait(2000);
  } else if (productType === 'Config') {
    cy.get('[data-test="product-Config"]').click(), cy.wait(2000);
    cy.get('[item-index="0"] > .vuetable-td-component-checkbox > .align-items-center').click(), cy.wait(2000); //dropdown product config
  }
});

Then('[Click] Simple product {string}', (item) => {
  if (item === '1 item') {
    cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="0"] > .vuetable-td-component-checkbox > input').click();
  } else if (item === '2 item') {
    cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="0"] > .vuetable-td-component-checkbox > input').click();
    cy.get('#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="1"] > .vuetable-td-component-checkbox > input').click();
  }
  cy.wait(1500);
  cy.contains('button', 'เลือกสินค้า').click();
  // cy.get('.text-center > .btn-primary').click();
  cy.wait(2000);
});

Then('[Click] Config product {string}', (item) => {
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

Then('[Click] Delete product', () => {
  cy.get('.fa-minus-circle').click();
});

Then('[Click] Save', () => {
  cy.get('[data-test="btn-save-order"]').click();
  cy.wait(2000);
  cy.get('.toast-message').should(($el) => {
    const text = $el.text();
    expect(text).to.match(/สร้างคำสั่งซื้อเรียบร้อยแล้ว|แก้ไขคำสั่งซื้อเรียบร้อยแล้ว/);
  });
  cy.wait(3000);
});