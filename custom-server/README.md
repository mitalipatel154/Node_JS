# 🚀 Node.js HTTP Server (Without Express)

A simple **Node.js HTTP server** built using the core `http` module.
This project demonstrates how to create a server, handle routes, and return different types of responses like **HTML** and **JSON**.

---

## 📌 Project Objective

* Create a basic HTTP server using Node.js
* Handle multiple routes manually
* Send proper HTTP status codes
* Return different content types (HTML & JSON)

---

## 🛠️ Technologies Used

* ⚡ Node.js
* 📦 Built-in `http` module

---

## 📂 Project Structure

```
project-folder/
│
├── server.js   # Main server file
└── README.md   # Documentation
```

---

## ▶️ How to Run the Project

1. Install Node.js (if not installed)

2. Clone or download the project

3. Open terminal in project folder

4. Run the server:

```
node server.js
```

5. Open browser:

```
http://localhost:8000
```

---

## 🌐 Available Routes

| Route       | Description        |
| ----------- | ------------------ |
| `/`         | Home Page          |
| `/about`    | About Page         |
| `/contact`  | Contact Page       |
| `/services` | Services Page      |
| `/api`      | JSON API Response  |
| Any other   | 404 Page Not Found |

---

## 📄 Example Responses

### ✅ Home Page

```
<h1>Welcome to Home Page!</h1>
```

### ✅ API Response

```json
{
  "message": "Hello...",
  "status": "OK"
}
```

### ❌ 404 Error

```
<h1>404 - Page Not Found</h1>
```

---

## ⚙️ Features

* ✔️ Custom routing using `req.url`
* ✔️ HTML response handling
* ✔️ JSON API endpoint
* ✔️ Proper status codes (200, 404)
* ✔️ Lightweight (no external libraries)

---

## 🚧 Future Improvements

* 🔹 Add file-based HTML pages
* 🔹 Handle query parameters
* 🔹 Add POST request support
* 🔹 Convert to Express.js for scalability
* 🔹 Connect with frontend (Admin Panel)

---

## 👨‍💻 Author

Mitali Patel

