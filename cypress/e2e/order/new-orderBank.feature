Feature: Check after deploy : Create Orders Bank

Background:
    Given User visits the login page 'https://gosaas.app/login'
    When  [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'
  

Scenario: Create a new order Bank
  Given [Click] Top menu Order and Sub menu Order
  When  [Click] Create Order
  Then [Input] Address Auto spread: Customer Row 1
  And [Click] Payment: 'Bank'
  And [Click] Select product by search: '9140137412-Meaw2V2'
  And [Click] Select product by search: '9140137412-Meaw3V2'
  And [Click] Select product by search: '9140137412-Meaw3V2'
  And [Click] Select product by search: '9140137412-Meaw4V2'
  And [Click] Save