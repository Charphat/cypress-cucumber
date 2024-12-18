Feature: Upsell

    #ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
    Background:
      Given   User visits the login page "https://gosaas.app/login"
      When    [Input] Email: "charphat.ntcp@gmail.com" Password: "S^83#b@v"
      When    Store Name: 'Playground of QA'
    
    Scenario: Upsell won and lost
        Given [Click] Top menu CRM and Sub menu Upsell
        # When [Click] Request lead
        When [Click] Assign Tab
        Then [Click] First order in assign page
        And [Click] Upsell
        And [Click] WON