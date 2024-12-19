Feature: Check after deploy : Create, Edit, Reorder

Background:
    Given   User visits the login page 'https://gosaas.app/login'
    When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v'
    When    Store Name: 'Playground of QA'

Scenario: Create a new order, COD
    Given [Click] Top menu Order and Sub menu Order
    Then  [Click] Create Order
    Then  [Input] Address Auto spread: Customer Row 1
    And   [Click] Payment: 'COD'
    # And   [Click] Mark As Confirm Payment 
    And   [Click] Selete Products Promotions
    And   [Click] Product 'Simple' Tab
    And   [Click] Simple product '1 item'
    # And   [Click] Selete Products Promotions
    # And   [Click] Product 'Config' Tab
    # And   [Click] Config product '2 item'
    And   [Click] Save

Scenario: Create a new order, BANK
    Given [Click] Top menu Order and Sub menu Order
    Then  [Click] Create Order
    Then  [Input] Address Auto spread: Customer Row 2
    And   [Click] Payment: 'BANK'
    # And   [Click] Mark As Confirm Payment 
    And   [Click] Selete Products Promotions
    # And   [Click] Product 'Simple' Tab
    # And   [Click] Simple product '1 item'
    # And   [Click] Selete Products Promotions
    And   [Click] Product 'Config' Tab
    And   [Click] Config product '2 item'
    And   [Click] Save

Scenario: Edit order by not change anything
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/19'
    When    [Click] More action and 'Edit'
    And     [Click] Save

Scenario: Edit order by not change product
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/70'
    When    [Click] More action and 'Edit'
    And     [Click] Delete product
    And     [Click] Selete Products Promotions
    And     [Click] Product 'Simple' Tab
    And     [Click] Simple product '1 item'
    And     [Click] Save

Scenario: Reorder by not change anything
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/3'
    When    [Click] More action and 'Re-Order'
    And     [Click] Save

Scenario: Reorder by change product
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/2'
    When    [Click] More action and 'Re-Order'
    And     [Click] Delete product
    And     [Click] Selete Products Promotions
    And     [Click] Product 'Simple' Tab
    And     [Click] Simple product '1 item'
    And     [Click] Save