flutter build web --base-href /ชื่อ-repo/

# 1. ไปที่ root Flutter project
cd D:\flutter\820\exampracticeWEB

# 2. init git (ถ้ายังไม่มี)
git init

# 3. สร้าง branch gh-pages
git checkout -b gh-pages

# 4. add ไฟล์ใน build/web
git add build/web -f

# 5. commit
git commit -m "Deploy Flutter web build"

# 6. เพิ่ม remote (เปลี่ยนชื่อ repo ตามต้องการ)
git remote add origin https://github.com/tonton-1/quiz-app.git

# 7. push แค่ build/web ขึ้น gh-pages
git subtree push --prefix build/web origin gh-pages
