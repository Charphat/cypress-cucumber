Feature: Check after deploy : Edit Order

Background:
    Given   User visits the login page 'https://gosaas.app/login'
    When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v'
    When    Store Name: 'Playground of QA'

Scenario: Edit order by not change anything
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/70'
    When    [Click] More action and 'Edit'
    And     [Click] Save

Scenario: Edit order by not change anything
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/70'
    When    [Click] More action and 'Edit'
    And     [Click] Delete product
    And     [Click] Selete Products Promotions
    And     [Click] Prod: Product 'Simple' Tab
    And     [Click] Prod: Simple product '1 item'
    And     [Click] Save