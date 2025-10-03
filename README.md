
---

# Jot - Full-Stack Notes & User Management App

[![Node.js](https://img.shields.io/badge/Node.js-20.0.0-brightgreen)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0.0-green?logo=mongodb)](https://www.mongodb.com/)

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Folder Structure](#folder-structure)
4. [Backend Setup](#backend-setup)
5. [Frontend Setup](#frontend-setup)
6. [Environment Variables](#environment-variables)
7. [API Endpoints](#api-endpoints)
8. [Authentication & Authorization](#authentication--authorization)
9. [Usage](#usage)
10. [Contributing](#contributing)
11. [License](#license)

---

## Project Overview

**Jot** is a full-stack web application for **note-taking and user management**. It allows users to:

* Register and login securely
* Create, update, and delete notes
* Manage their profile
* Admins can view and manage all users (optional)

Backend is built with **Node.js + Express + MongoDB**, and frontend is built with **Next.js** using modern React hooks and Tailwind CSS.

---

## Features

* **Authentication & Authorization** (JWT-based)
* **CRUD operations** for notes
* **User registration & login**
* **Admin functionalities** (optional)
* **Responsive dashboard UI**
* **Secure password hashing** with bcrypt
* **Frontend & backend separation**

---

## Folder Structure

```
Root (Backend)
├─ config/           # DB connection
├─ controllers/      # Handles routes logic
├─ middleware/       # JWT auth middleware
├─ models/           # User & Note schema
├─ routes/           # API routes
├─ server.js         # Backend entry point
├─ package.json      # Backend dependencies
└─ jot-frontend/     # Frontend (Next.js)
   ├─ public/
   ├─ src/
   ├─ jsconfig.json
   ├─ next.config.mjs
   ├─ package.json
   └─ postcss.config.mjs
```

---

## Backend Setup

1. **Install dependencies**:

```bash
npm install
```

2. **Run the server**:

```bash
node server.js
```

3. **Dependencies used**:

* express
* mongoose
* bcryptjs
* jsonwebtoken
* cors
* dotenv

---

## Frontend Setup

1. Navigate to frontend folder:

```bash
cd jot-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open in browser at `http://localhost:3000`

---

## Environment Variables

Create a `.env` file in the root backend folder:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## API Endpoints

### Auth

| Method | Endpoint              | Description              | Auth Required |
| ------ | --------------------- | ------------------------ | ------------- |
| POST   | /api/v1/auth/register | Register new user        | No            |
| POST   | /api/v1/auth/login    | Login existing user      | No            |
| GET    | /api/v1/auth/me       | Get current user info    | Yes           |
| PUT    | /api/v1/auth/me       | Update current user info | Yes           |

### Notes

| Method | Endpoint          | Description           | Auth Required |
| ------ | ----------------- | --------------------- | ------------- |
| GET    | /api/v1/notes     | Get all notes of user | Yes           |
| POST   | /api/v1/notes     | Create a new note     | Yes           |
| PUT    | /api/v1/notes/:id | Update a note by ID   | Yes           |
| DELETE | /api/v1/notes/:id | Delete a note by ID   | Yes           |

---

## Authentication & Authorization

* Uses **JWT** tokens for authentication
* Token is stored in **localStorage** on the frontend
* `Authorization: Bearer <token>` header is required for protected routes
* **Admin routes** can be enabled if needed (role-based access)

---

## Usage

1. **Register / Login**
2. **Create / Edit / Delete notes**
3. **Access dashboard** to view your notes
4. (Optional) **Admin can view and manage all users**

Frontend and backend can run simultaneously during development:

```bash
# In root
node server.js

# In frontend
cd jot-frontend
npm run dev
```

---

## Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit (`git commit -m "Add feature"`)
5. Push (`git push origin feature-name`)
6. Open a Pull Request

---

## License

MIT License

---

