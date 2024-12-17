Feature: Create Orders

    #ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
    Background:
      Given User visits the login page "https://uatgosaas.app/login"
      When Input email: "charphat.ntcp@gmail.com" and password: "S^83#b@v"
      And User click the login button
      When Confirm and go in store: 'Fake Testing'

    #สร้างออเดอร์ ลูกค้าใหม่ COD 2 รายการสินค้า ยืนยันออเดอร์
    Scenario: Create a new order COD, 2 item, mark confirm
      #คลิกเมนูคำสั่งซื้อ
      Given Click on top menu Order and sub menu Order
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #คำสั่ง "ให้รีเฟรชหน้าจอ" ที่อยู่ตอนนั้น
      And Refresh on page before test
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #พิมพ์ข้อมูลลูกค้าลงในช่อง "ที่อยู่(กระจายที่อยู่)"
      Then Input customer data on address auto spread: "ชื่อ โจ	0994977678	วัชระ สัมฤทธิเวช	88 หมู่12	บางปะกง	บางปะกง	ฉะเชิงเทรา	24130"
      #เลือกวิธีการชำระเงิน 'COD' หรือ 'Bank'
      And Choose payment for this order: 'COD'
      #ติ๊ก "ยืนยันการจัดส่ง"
      And Mark confirm order for COD 
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config' ใส่ Prod, UAT ด้วยต่อท้าย
      And Choose product to order, Product type: 'Simple' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Simple: '2 item' UAT
      #คลิกปุ่ม "บันทึก" จะบันทึกออเดอร์และตรวจสอบ Toast ว่าสร้างคำสั่งซื้อสำเร็จ
      And Click Save button for create order