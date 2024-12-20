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

Given('[Click] Search customer data, customer name: {string}', (customer) => {
  cy.get('[data-test="serch-customer"] > :nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click();
  cy.get('[data-test="serch-customer"] > :nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').type(customer);
  cy.wait(2000);
  cy.get('.select2-results__option--highlighted').click();
  cy.wait(2000);
});

Then('[Click] Payment: {string}', (paymentMethod) => {
  if (paymentMethod === 'COD') {
    cy.get('[data-test="method-COD"]').click();
  } else if (paymentMethod === 'Bank') {
    cy.get('[data-test="method-Bank Transfer"]').click();
  }
  cy.wait(1500);
});

Then('[Click] Select product by search: {string}', (searchProduct) => {
  cy.get('[data-test="search-product"] > div > .select2 > .selection > .select2-selection > #select2--container').scrollIntoView().should('be.visible').click();
  cy.wait(2000);
  cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(searchProduct);
  cy.wait(2000);
  cy.get('.select2-results__option').click();
});

// Then('[Click] Create Selete Product {string} Tab {string} and Product {string}', (productType, configIndex, item) => {
//   cy.get('[data-test="btn-add-promotion"]').click(), cy.wait(2000);
//   if (productType === 'Simple') {
//     cy.get('[data-test="product-Simple"]').click(), cy.wait(2000);
//   } else if (productType === 'Config') {
//     cy.get('[data-test="product-Config"]').click(), cy.wait(2000);

//     const index = parseInt(configIndex.split(' ')[1]) - 1;
//     cy.get(`[item-index="${index}"] > .vuetable-td-component-checkbox > .align-items-center`).click();
//     cy.wait(2000);
//   }

//   const itemCount = parseInt(item.split(' ')[0]);

//   for (let i = 0; i < itemCount; i++) {
//     cy.get(`#table_product_promotion > .vuetable-wrapper > .dataTable > .vuetable-body-wrapper > .vuetable > .vuetable-body > [item-index="${i}"] > .vuetable-td-component-checkbox > input`).click();
    
//   }
//   console.log('itemCount', itemCount);
//   cy.wait(1000);
//   cy.contains('button', 'เลือกสินค้า').click();
//   cy.wait(2000);
// });

Then('[Click] Delete product', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.fa-minus-circle').length === 1) {
      cy.get('.fa-minus-circle').click();
    } else {
      cy.get('.fa-minus-circle').each(($el, index, $list) => {
        if (index === 0) {
          cy.wrap($el).click();
        }
      });
    }
  });
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

Then('[Click] Save', () => {
  cy.get('[data-test="btn-save-order"]').click();
  cy.wait(2000);
  cy.get('.toast-message').should(($el) => {
    const text = $el.text();
    expect(text).to.match(/สร้างคำสั่งซื้อเรียบร้อยแล้ว|แก้ไขคำสั่งซื้อเรียบร้อยแล้ว/);
  });
  cy.wait(3000);
});