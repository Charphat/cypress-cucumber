Feature: Check after deploy : Reorder

#ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
Background:
    Given   User visits the login page 'https://gosaas.app/login'
    When    [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v' Store Name: 'Playground of QA' Domain: 'playgroundofqa.gosaas.app'

Scenario: Reorder by change product
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/60'
    When    [Click] More action and 'Re-Order'
    And     [Click] Select product by search: '9140137412-Meaw3V2'
    And     [Click] Payment: 'Bank'
    And     [Click] Toggle Add payment
    And     [Click] Save