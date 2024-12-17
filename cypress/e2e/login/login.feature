Feature: User Login

  Scenario: Login and use store
      Given User visits the login page "https://uatgosaas.app/login"
      When Input email: "khantaton19977@gmail.com" and password: "&$Kx8^9X"
      And User click the login button
      When Confirm and go in store: 'UAT Gochat (TEST52)'