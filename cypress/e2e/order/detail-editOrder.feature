Feature: Check after deploy : Edit Order

Background:
    Given [Input] Url: 'https://gosaas.app/login' Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'

Scenario: Edit order by not change anything
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/70'
    When    [Click] More action and 'Edit'
    And     [Click] Delete product
    And     [Click] Select product by search: '9140137412-Meaw3V2'
    And     [Click] Select product by search: 'สติ๊กเกอร์แมวสุดกวน v2'
    And     [Click] Save