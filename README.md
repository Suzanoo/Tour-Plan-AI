# Create Tour Plan by OpenAI API:

# วางแผนการเดินทางเบื้องต้นด้วย ChatGPT "text-davinci-003" model ของ [openai.com](https://openai.com/)

## Intro

โปรเจคนี้เราใช้ API 3 ตัว

- OpenAI API สำหรับสร้าง แผนการเดินทาง (Text Completion)
- Mapquest API สำหรับหาพิกัด ละติจูด ลองจิจูด เพื่อเราส่งชื่อ สถานที่ไปให้
- Mabbox API สำหรับแสดงแผนที่

โดยเราจะสร้างไฟล์ชื่อ .env สำหรับเก็บค่า API key (รายละเอียดด้านล่าง)

## ติดตั้ง Tools:

- ติดตั้ง [VSCode](https://code.visualstudio.com/download)

- ติดตั้ง [Git](https://git-scm.com/downloads)

- ติดตั้ง [NodeJS](https://nodejs.org/en/download/)

## ติดตั้ง Program:

ไปที่ desktop โดยรันคำสั่ง

#### `cd desktop`

จากนั้น ใช้ git ทำการ clone [repository](https://github.com/Suzanoo/Tour-Plan-AI) มาไว้ที่ desktop โดยรันคำสั่งด้านล่าง จะได้โฟลเดอร์ชื่อ Tour-Plan-AI ต่อไปจะเรียกว่า root folder

#### `git clone https://github.com/Suzanoo/Tour-Plan-AI.git`

เข้าไปที่ root folder โดยรันคำสั่ง

#### `cd tour-plan-ai`

เปิด VSCode โดยรันคำสั่ง

#### `code .`

## Environments:

สร้างไฟล์ชื่อ .env ภายใต้ root folder โดยไปที่ VSCode คลิกเลือกชื่อของ root folder คลิกสร้างไฟล์ หรือจะสร้างโดยรันคำสั่ง
ด้านล่างก็ได้เช่นกัน

#### `touch .env`

ในไฟล์ .env สร้างตัวแปร 5 ตัว แล้ว save ไว้ (กด Crtl+S หรือ Cmd+S)

#### `NODE_ENV=development`

#### `PORT=5000`

#### `GEOCODER_PROVIDER=mapquest`

#### `GEOCODER_API_KEY=12345`

#### `OPENAI_API_KEY="12345"`

สมัครสมาชิก [openai.com](https://openai.com/) แล้วที่เมนู Personal ทำการสร้าง API keys แล้วนำค่าที่ได้ไปใส่ให้ตัวแปร OPENAI_API_KEY

#### `OPENAI_API_KEY="5NqOvobOqKXT3BlbkF5NqOvo..."`

สมัครสมาชิก [developer.mapquest.com](https://developer.mapquest.com/user/login) สร้าง API key แล้วนำค่าที่ได้ไปใส่ให้ตัวแปร

#### `GEOCODER_API_KEY=o3bk0WBy...`

สมัครสมาชิก [mapbox](https://www.mapbox.com/) สร้าง API key แล้วนำค่าที่ได้ไปใส่ให้ตัวแปรชื่อ "mapboxgl.accessToken" ที่ไฟล์

#### `line 9: frontend/src/components/Map.jsx`

## Dependencies Installation:

ติดตั้ง dependencies ของฝั่ง server จากไฟล์ package.json ของ root folder โดยรันคำสั่ง

#### `npm install`

ติดตั้ง dependencies จากไฟล์ package.json ของฝั่ง client โดยเข้าไปที่ โฟลเดอร์ client ก่อน

#### `cd client`

แล้วรันคำสั่ง

#### `npm install`

## Run Program:

จากขั้นตอนที่แล้ว ขณะนี้เราอยู่ที่โฟลเดอร์ client(ตรวจสอบได้โดยรันคำสั่ง pwd) ให้ถอยกลับมาที่ root folder โดยรันคำสั่ง

#### `cd ..`

ที่ไฟล์ package.json ของ root folder ที่บล๊อค script จะมีคำสั่งไว้รันโปรแกรม

- start : สำหรับรันเฉพาะฝั่ง server
- debug : สำหรับรัน debug
- client : สำหรับรันเฉพาะฝั่ง client
- dev : สำหรับรันพร้อมกันทั้ง 2 ฝั่ง
- เลือกรันคำสั่งที่ 4

#### `npm run dev`

โปรแกรมจะเปิดเพจขึ้นมา หรือพิมพ์ URL ใน Browser

#### `http://localhost:3000` or `http://127.0.0.1:3000`

## Enjoy:

- ออกจากโปรแกรม กด Control+C

## NOTE:

โปรแกรม ใช้แพคเกจ tailwindCSS ถ้าต้องการ อัพเดท UI สามารถอัพเดทได้ที่ฝั่ง client

### `cd frontend`

### `npm run start`

สมารถเปลี่ยนโมเดลใช้ตัวที่มีประสิทธิภาพสูงของ OpenAI ได้ (มี Cost) ดูโมเดลได้ [ที่นี่](https://platform.openai.com/docs/models/overview)โดยใส่ชื่อโมเดลที่ต้องการที่

### `line 53: backend/controller/textComplete.js`

## INFLUENCES:

- https://codepen.io/z-/pen/OBPJKK
- https://www.youtube.com/@TraversyMedia
- https://www.youtube.com/watch?v=9FQrFah9rnc&t=2237s
