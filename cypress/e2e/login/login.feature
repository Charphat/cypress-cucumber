Feature: User Login

  Scenario: Login and use store
      Given   User visits the login page 'https://gosaas.app/login'
      When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v'
      When    Store Name: 'Playground of QA'
      Then    [Click] Top menu Order and Sub menu Order
      And     [Click] First order for open order detail