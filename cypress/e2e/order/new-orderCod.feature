Feature: Check after deploy : Create Orders COD 

Background:
    Given   User visits the login page 'https://gosaas.app/login'
    When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'
  
Scenario: Create a new order Bank
  Given [Click] Top menu Order and Sub menu Order
  When  [Click] Create Order
  Then  [Input] Address Auto spread: Customer Row 1
  And   [Click] Payment: 'COD'
  And   [Click] Select product by search: 'สติ๊กเกอร์แมวสุดกวน v2'
  And   [Click] Save