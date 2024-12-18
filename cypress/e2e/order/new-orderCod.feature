Feature: Check after deploy : Create Orders COD 

    #ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
    Background:
      Given User visits the login page 'https://gosaas.app/login'
      When [Input] Email: 'charphat.ntcp@gmail.com' Password: 'S^83#b@v'
      When Store Name: 'Playground of QA'

    #สร้างออเดอร์ ลูกค้าใหม่ COD 2 รายการสินค้า ยืนยันออเดอร์
    Scenario: Create a new order COD, 4 item
      #คลิกเมนูคำสั่งซื้อ
      Given [Click] Top menu Order and Sub menu Order
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then  [Click] Create Order
      #พิมพ์ข้อมูลลูกค้าลงในช่อง "ที่อยู่(กระจายที่อยู่)"
      Then  [Input] Address Auto spread: Customer Row 1
      #เลือกวิธีการชำระเงิน 'COD' หรือ 'Bank'
      And   [Click] Payment: 'COD'
      #ติ๊ก "ยืนยันการจัดส่ง"
      # And   [Click] Mark As Confirm Order 
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And   [Click] Selete Products Promotions
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config'
      And   [Click] Prod: Product 'Simple' Tab
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And   [Click] Prod: Simple product '2 item'
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And   [Click] Selete Products Promotions
            #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config'
      And   [Click] Prod: Product 'Config' Tab
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And   [Click] Prod: Config product '2 item'
      #คลิกปุ่ม "บันทึก" จะบันทึกออเดอร์และตรวจสอบ Toast ว่าสร้างคำสั่งซื้อสำเร็จ
      And   [Click] Save