# 🎬 Netflix Movie App

A full-stack movie management web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** — inspired by Netflix UI.

---

## 📁 Project Structure

```
Netflix/
├── config/
│   └── db.js
├── controllers/
│   └── movieController.js
├── models/
│   └── movieSchema.js
├── public/
│   └── assets/
│       ├── css/
│       │   ├── fonts.css
│       │   └── index.css
│       ├── fonts/
│       ├── images/
│       ├── js/
│       └── uploads/
├── routes/
│   └── movieRoutes.js
├── views/
│   ├── addMovie.ejs
│   ├── editMovie.ejs
│   ├── footer.ejs
│   ├── header.ejs
│   ├── index.ejs
│   ├── movieDetails.ejs
│   └── viewMovie.ejs
├── app.js
├── package.json
└── README.md
```

---

## 🚀 Features

- 🏠 Home page with **Trending Now** section
- ➕ Add new movies with poster image upload
- 📋 View all movies in a **table** with full details
- 🔍 Click on movie poster to view **movie details**
- ✏️ Edit movie details including image and duration
- 🗑️ Delete movies with confirmation prompt
- 📁 Image upload handled via **Multer**
- 🗄️ Data stored in **MongoDB** via Mongoose

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| EJS | Templating engine |
| Multer | File/image upload |
| Nodemon | Auto server restart |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/netflix-movie-app.git
cd netflix-movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Make sure MongoDB is running

```bash
mongod
```

> MongoDB runs on `mongodb://127.0.0.1:27017/movieproject` by default.

### 4. Create uploads folder

Make sure this folder exists for image uploads:

```bash
mkdir -p public/assets/uploads
```

### 5. Start the server

```bash
# Using nodemon (recommended)
nodemon app.js

# Or using node
node app.js
```

### 6. Open in browser

```
http://localhost:9000
```

---

## 📌 Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page - Trending movies |
| GET | `/movies` | Home page - Trending movies |
| GET | `/addMovie` | Show add movie form |
| POST | `/addMovie` | Save new movie to DB |
| GET | `/viewMovie` | View all movies in table |
| GET | `/movieDetails/:id` | View single movie details |
| GET | `/editMovie/:id` | Show edit movie form |
| POST | `/editMovie/:id` | Update movie in DB |
| GET | `/deleteMovie/:id` | Delete movie from DB |

---

## 🗃️ Movie Schema

```javascript
{
  title:       String  (required),
  languages:   [String] (required),
  desc:        String  (required),
  releaseYear: String  (required),
  genre:       String  (required),
  rating:      Number  (default: 0),
  actors:      [String] (default: []),
  director:    [String] (default: []),
  duration:    String  (default: ""),
  image:       String  (default: null)
}
```

---

## 📸 Screenshots

| Page | Description |
|------|-------------|
| Home | Trending movies with poster cards |
| Add Movie | Form to add a new movie |
| View Movie | Table with all movies and actions |
| Movie Details | Full detail page of a single movie |
| Edit Movie | Pre-filled form to update movie |

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "mongoose": "^7.x",
  "ejs": "^3.x",
  "multer": "^1.x",
  "nodemon": "^3.x"
}
```

Install all at once:

```bash
npm install express mongoose ejs multer
npm install --save-dev nodemon
```

---

## 🔧 package.json Scripts

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Run in dev mode:

```bash
npm run dev
```

---

## 👤 Author

**Mitali Patel**  

---

## 📄 License

This project is licensed under the **MIT License**.