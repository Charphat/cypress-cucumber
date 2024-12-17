Feature: Create Orders

    #ส่วนนี้เป็นขั้นตอนเข้าระบบ ให้เปลี่ยนลิ้งค์ อีเมล์ รหัสผ่าน ถ้ามีอัปเดต จะทำเทสใหม่ให้ copy ไปทั้งหมดในชุด
    Background:
      Given User visits the login page "https://uatgosaas.app/login"
      When Input email: "charphat.ntcp@gmail.com" and password: "S^83#b@v"
      And User click the login button
      When Confirm and go in store: 'Fake Testing'

    #สร้างออเดอร์ ลูกค้าใหม่ โอนเงิน 4 รายการสินค้า ตัวเลือก 3 มาตรฐาน 1 ไม่ยืนยัน
    Scenario: Create a new order Bank, 4 item, Config 3 Simple 1, No confirm
      #คลิกเมนูคำสั่งซื้อ
      Given Click on top menu Order and sub menu Order
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #คำสั่ง "ให้รีเฟรชหน้าจอ" ที่อยู่ตอนนั้น
      And Refresh on page before test
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #พิมพ์ข้อมูลลูกค้าลงในช่อง "ที่อยู่(กระจายที่อยู่)"
      Then Input customer data on address auto spread: "ประสาน ชื่นใจธรรม	0950473082	ประสาน ชื่นใจธรรม	100/1 ธาตุทอง บ่อทอง ชลบุรี 20270"
      #เลือกวิธีการชำระเงิน 'COD' หรือ 'Bank'
      And Choose payment for this order: 'Bank'
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config' ใส่ Prod, UAT ด้วยต่อท้าย
      And Choose product to order, Product type: 'Config' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Config: '3 item' UAT
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And Choose product to order, Product type: 'Simple' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Simple: '1 item' UAT
      And Click Save button for create order

    #สร้างออเดอร์ ลูกค้าใหม่ โอนเงิน 2 รายการสินค้า ตัวเลือก 1 มาตรฐาน 1 ยืนยัน
    Scenario: Create a new order Bank, 2 item, Config 3 Simple 1, mark confirm
      #คลิกเมนูคำสั่งซื้อ
      Given Click on top menu Order and sub menu Order
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #คำสั่ง "ให้รีเฟรชหน้าจอ" ที่อยู่ตอนนั้น
      And Refresh on page before test
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #พิมพ์ข้อมูลลูกค้าลงในช่อง "ที่อยู่(กระจายที่อยู่)"
      Then Input customer data on address auto spread: "Sakon Korh 0822238353 Sakon Korh บริษัทชุนฟู่อินดัสเทรียลจำกัด บางปู เมืองสมุทรปราการ 10280"
      #เลือกวิธีการชำระเงิน 'COD' หรือ 'Bank'
      And Choose payment for this order: 'Bank'
      #ติ๊ก "ยืนยันการชำระเงินเรียบร้อย" ของโอนเงิน
      And Confirm payment for bank tranfers
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config' ใส่ Prod, UAT ด้วยต่อท้าย
      And Choose product to order, Product type: 'Config' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Config: '1 item' UAT
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config' ใส่ Prod, UAT ด้วยต่อท้าย
      And Choose product to order, Product type: 'Simple' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Simple: '1 item' UAT
      #คลิกปุ่ม "บันทึก" จะบันทึกออเดอร์และตรวจสอบ Toast ว่าสร้างคำสั่งซื้อสำเร็จ
      And Click Save button for create order
    
    #สร้างออเดอร์ ลูกค้าใหม่ COD 1 รายการสินค้า ไม่ยืนยันออเดอร์
    Scenario: Create a new order COD, 1 item, no mark confirm
      #คลิกเมนูคำสั่งซื้อ
      Given Click on top menu Order and sub menu Order
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #คำสั่ง "ให้รีเฟรชหน้าจอ" ที่อยู่ตอนนั้น
      And Refresh on page before test
      Then Click on the Create Order button
      #พิมพ์ข้อมูลลูกค้าลงในช่อง "ที่อยู่(กระจายที่อยู่)"
      And Input customer data on address auto spread: "วิทยา บุษราคำ	0618957259	วิทยา บุษราคำ	174 / 2 ม.2 สุทินแมนชั่น ห้อง 208	บางวัว	บางปะกง	ฉะเชิงเทรา	24180"
      #เลือกวิธีการชำระเงิน 'COD' หรือ 'Bank'
      And Choose payment for this order: 'COD'
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config' ใส่ Prod, UAT ด้วยต่อท้าย
      And Choose product to order, Product type: 'Simple' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Simple: '1 item' UAT
      #คลิกปุ่ม "บันทึก" จะบันทึกออเดอร์และตรวจสอบ Toast ว่าสร้างคำสั่งซื้อสำเร็จ
      And Click Save button for create order

    #สร้างออเดอร์ ลูกค้าใหม่ COD 2 รายการสินค้า ยืนยันออเดอร์
    Scenario: Create a new order COD, 2 item, mark confirm
      #คลิกเมนูคำสั่งซื้อ
      Given Click on top menu Order and sub menu Order
      #คลิกที่ปุ่ม "สร้างคำสั่งซื้อ"
      Then Click on the Create Order button
      #คำสั่ง "ให้รีเฟรชหน้าจอ" ที่อยู่ตอนนั้น
      And Refresh on page before test
      Then Click on the Create Order button
      #พิมพ์ข้อมูลลูกค้าลงในช่อง "ที่อยู่(กระจายที่อยู่)"
      Then Input customer data on address auto spread: "ชื่อ โจ	0994977678	วัชระ สัมฤทธิเวช	88 หมู่12	บางปะกง	บางปะกง	ฉะเชิงเทรา	24130"
      #เลือกวิธีการชำระเงิน 'COD' หรือ 'Bank'
      And Choose payment for this order: 'COD'
      And Mark confirm order for COD 
      #คลิกปุ่ม "เพิ่มสินค้า/โปรโมชั่น"
      And Add product in order
      #เลือกสินค้าต้องเลือกก่อนจะเอาสินค้าประเภทไหน 'Simple' หรือ 'Config' ใส่ Prod, UAT ด้วยต่อท้าย
      And Choose product to order, Product type: 'Simple' UAT
      #จะใช้รายการสินค้ากี่รายการ ใส่ประเภท ตามด้วยจำนวน ไซต์
      And List of products in this order, Simple: '2 item' UAT
      #คลิกปุ่ม "บันทึก" จะบันทึกออเดอร์และตรวจสอบ Toast ว่าสร้างคำสั่งซื้อสำเร็จ
      And Click Save button for create order