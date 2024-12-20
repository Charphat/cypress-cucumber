Feature: Check after deploy : Create, Repeat, Edit, Reorder

Background:
    Given   User visits the login page 'https://gosaas.app/login'
    When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'

Scenario: Create a new order Bank
    Given [Click] Top menu Order and Sub menu Order
    When  [Click] Create Order
    Then  [Input] Address Auto spread: Customer Row 1
    And   [Click] Payment: 'Bank'
    And   [Click] Toggle Add payment
    And   [Click] Select product by search: '9140137412-Meaw2V2'
    And   [Click] Select product by search: '9140137412-Meaw3V2'
    And   [Click] Select product by search: '9140137412-Meaw3V2'
    And   [Click] Select product by search: '9140137412-Meaw4V2'
    And   [Click] Save

Scenario: Create a new order COD
    Given [Click] Top menu Order and Sub menu Order
    When  [Click] Create Order
    Then  [Input] Address Auto spread: Customer Row 2
    And   [Click] Payment: 'COD'
    And   [Click] Select product by search: 'สติ๊กเกอร์แมวสุดกวน v2'
    And   [Click] Save

Scenario: Repeat a new order
    Given [Click] Top menu Order and Sub menu Order
    When  [Click] Create Order
    Then  [Click] Search customer data, customer name: 'b'
    And   [Click] Payment: 'COD'
    And   [Click] Select product by search: 'สติ๊กเกอร์แมวสุดกวน v2'
    And   [Click] Save

Scenario: Edit order by change product
    Given [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/70'
    When  [Click] More action and 'Edit'
    And   [Click] Delete product
    And   [Click] Select product by search: '9140137412-Meaw3V2'
    And   [Click] Select product by search: 'สติ๊กเกอร์แมวสุดกวน v2'
    And   [Click] Save

Scenario: Reorder by Add product more
    Given [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/60'
    When  [Click] More action and 'Re-Order'
    And   [Click] Select product by search: '9140137412-Meaw3V2'
    And   [Click] Payment: 'Bank'
    And   [Click] Toggle Add payment
    And   [Click] Save