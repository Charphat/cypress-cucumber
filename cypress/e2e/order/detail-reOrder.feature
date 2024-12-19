Feature: Check after deploy : Reorder

#ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
Background:
  Given     User visits the login page 'https://gosaas.app/login'
  When      [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v'
  When      Store Name: 'Playground of QA'

Scenario: Reorder by not change anything
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/70'
    When    [Click] More action and 'Re-Order'
    And     [Click] Sav
Scenario: Reorder by change product
    Given   [Order detail] link: 'https://playgroundofqa.gosaas.app/app/orders/60'
    When    [Click] More action and 'Re-Order'
    And     [Click] Delete product
    And     [Click] Selete Products Promotions
    And     [Click] Product 'Simple' Tab
    And     [Click] Simple product '1 item'
    And     [Click] Save