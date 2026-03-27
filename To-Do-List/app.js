const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];

app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/add", (req, res) => {
  const task = req.body.task;

  if (task) {
    todos.push({
      text: task,
      completed: false
    });
  }

  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  todos.splice(req.params.id, 1);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  res.render("edit", {
    id: req.params.id,
    todo: todos[req.params.id]
  });
});

app.post("/update/:id", (req, res) => {
  todos[req.params.id].text = req.body.task;
  res.redirect("/");
});

app.post("/toggle/:id", (req, res) => {
  todos[req.params.id].completed = !todos[req.params.id].completed;
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));