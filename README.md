# 🏥 Patient Management System API

A production-ready backend API built using **NestJS** for managing patient data in a healthcare system. This project demonstrates RESTful API design, database integration, validation, and cloud deployment.

---

## 🚀 Live Demo

👉 https://patient-management-system-nestjs.onrender.com/patients

---

## 📌 Features

* ✅ RESTful API (CRUD operations)
* ✅ Modular architecture (Controller, Service, Module)
* ✅ MySQL database integration
* ✅ TypeORM for database management
* ✅ DTO validation using class-validator
* ✅ Global validation pipes
* ✅ Error handling (404, 400, etc.)
* ✅ Cloud deployment
* ✅ Scalable project structure

---

## 🧠 Tech Stack

* **Backend Framework:** NestJS
* **Database:** MySQL
* **ORM:** TypeORM
* **Validation:** class-validator, class-transformer
* **Deployment:** Render
* **Cloud Database:** Railway

---

## 🏗️ Project Structure

```
src/
│── patients/
│   ├── dto/
│   │   └── create-patient.dto.ts
│   ├── patient.entity.ts
│   ├── patients.controller.ts
│   ├── patients.service.ts
│   └── patients.module.ts
│
│── app.module.ts
│── main.ts
```

---

## 🔁 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /patients     | Get all patients   |
| GET    | /patients/:id | Get patient by ID  |
| POST   | /patients     | Create new patient |
| PUT    | /patients/:id | Update patient     |
| DELETE | /patients/:id | Delete patient     |

---

## 🧪 Sample Request

### POST /patients

```json
{
  "name": "Lavya",
  "age": 21,
  "disease": "Cold"
}
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/patient-api.git
cd patient-api
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env` file:

```env
MYSQL_PUBLIC_URL=your_database_connection_string
```

---

### 4. Run the application

```bash
npm run start:dev
```

---

## ☁️ Deployment

* Backend deployed on **Render**
* Database hosted on **Railway**

---

## 🧠 Key Concepts Implemented

* REST API design
* Dependency Injection
* DTO validation
* Error handling
* Database ORM mapping
* Environment configuration
* Cloud deployment

---

## 📈 Future Improvements

* 🔐 JWT Authentication (Login/Signup)
* 📄 Swagger API documentation
* 📊 Pagination & filtering
* 🧾 Logging & monitoring

---

## 🎯 Author

**Lavya Agrawal**

---

## ⭐ Final Note

This project demonstrates a complete backend development workflow—from building APIs to deploying them in a production environment. It reflects strong fundamentals in backend architecture and real-world development practices.

---
