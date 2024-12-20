Feature: Check after deploy : Repeat Order

Background:
    Given [Input] Url: 'https://gosaas.app/login' Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'

Scenario: Repeat a new order
    Given [Click] Top menu Order and Sub menu Order
    When  [Click] Create Order
    Then  [Click] Search customer data, customer name: 'เวง'
    And   [Click] Payment: 'COD'
    And   [Click] Select product by search: 'สติ๊กเกอร์แมวสุดกวน v2'
    And   [Click] Save