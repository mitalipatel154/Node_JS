const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  image: String
});
const Book = mongoose.model("Book", bookSchema);

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


app.get("/", async (req, res) => {
  const books = await Book.find();
  res.render("index", { books, total: books.length });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", upload.single("image"), async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
    image: req.file ? req.file.filename : ""
  });

  await book.save();
  res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.get("/edit/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("edit", { book });
});

app.post("/update/:id", upload.single("image"), async (req, res) => {
  let data = {
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description
  };

  if (req.file) {
    data.image = req.file.filename;
  }

  await Book.findByIdAndUpdate(req.params.id, data);
  res.redirect("/");
});

app.get("/show/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("show", { book });
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});