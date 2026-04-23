---
title: "Doocal (Nutrition Tracking App)"
description: "A health application integrated with LINE Bot and LIFF, utilizing Gemini AI to automatically estimate calories from food images and track daily nutrition."
type: "web"
video: "images/doocalvideo.mp4"
demo: "https://doocal-production.up.railway.app/"    
tags: ["Node.js", "MySQL", "Messaging API"]
order: 4
featured: true
---

**Doocal** เป็นแอปพลิเคชันเพื่อสุขภาพที่ผสานการทำงานระหว่าง **LINE Bot** และ **LINE LIFF** ออกแบบมาเพื่อให้ผู้ใช้ติดตามประวัติการกินและการดื่มน้ำได้อย่างง่ายดาย ไฮไลท์สำคัญคือการนำ **Gemini AI** มาช่วยวิเคราะห์เมนูอาหารและคำนวณแคลอรี่จากรูปภาพที่ผู้ใช้ส่งเข้าบอทได้ทันที

### 🌟 Key Features
- **AI Food Tracking**: ถ่ายรูปส่งให้บอท ระบบจะใช้ Gemini AI ประเมินชื่อเมนู แคลอรี่ และสารอาหาร (คาร์โบไฮเดรต, โปรตีน, ไขมัน) ให้อัตโนมัติ
- **Personalized Profile & TDEE**: คำนวณหาค่า TDEE จากข้อมูลส่วนตัว เพื่อกำหนดเป้าหมายการกินรายวันที่เหมาะสม
- **Water Tracker & Dashboard**: ระบบติดตามการดื่มน้ำ และหน้าแดชบอร์ดดูประวัติการทานอาหารย้อนหลังผ่านหน้าเว็บ LIFF
- **Automated Premium Subscription**: ระบบตรวจสอบสลิปโอนเงินอัตโนมัติด้วย SlipOK API เพื่ออัปเกรดสถานะผู้ใช้งานเป็น Premium

### 🛠️ Tech Stack
- **Backend & Database**: Node.js, Express, MySQL
- **APIs & Integration**: LINE Messaging API, LINE LIFF, Google Generative AI (Gemini), SlipOK API
- **Infrastructure**: รันระบบทั้งหมดบน Docker (Node, MySQL, Caddy proxy) เพื่อการติดตั้งและใช้งานที่สะดวก