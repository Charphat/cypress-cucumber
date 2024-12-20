Feature: User Login

Background: Login and use store
    Given   User visits the login page 'https://gosaas.app/login'
    When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'

Scenario: Test 1
    Given    [Click] Top menu Order and Sub menu Order
    When     [Click] Create Order
    Then     [Input] Address Auto spread: Customer Row 3
    And      [Click] Payment: 'BANK'
    Then     [Click] Create Selete Product 'Simple' Tab '' and Product '2 item'
    Then     [Click] Create Selete Product 'Config' Tab 'Config 2' and Product '3 item'