const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];

app.get("/", (req, res) => {
  const search = req.query.search || "";
  const status = req.query.status || "all";

  let filteredTodos = todos.map((todo, index) => ({
    ...todo,
    originalIndex: index
  }));

  filteredTodos = filteredTodos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  if (status === "completed") {
    filteredTodos = filteredTodos.filter(todo => todo.completed);
  } else if (status === "pending") {
    filteredTodos = filteredTodos.filter(todo => !todo.completed);
  }

  res.render("index", { todos: filteredTodos, search, status });
});

app.post("/add", (req, res) => {
  const { task } = req.body;

  if (task) {
    todos.push({
      text: task,
      completed: false
    });
  }

  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
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

const port = 8000;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));