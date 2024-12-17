Feature: Upsell

    #ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
    Background:
      Given User visits the login page "https://uatgosaas.app/login"
      When Input email: "charphat.ntcp@gmail.com" and password: "S^83#b@v"
      And User click the login button
      When Confirm and go in store: 'Fake Testing'
    
    Scenario: Upsell won and lost
        Given Go to Upsell Menu
        When Click to Assign Tab
        Then Click first order in assign page
        And Click Upsell button
        And Click WON for upsell won

        Given Go to Upsell Menu
        When Click to Assign Tab
        Then Click first order in assign page
        And Click Upsell button
        And Click LOST for upsell lost