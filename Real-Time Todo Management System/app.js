const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let tasks = [
  {
    id: 1,
    title: 'Prepare Weekly Report',
    description: 'Complete weekly project status report for stakeholders',
    priority: 'High',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Team Standup Meeting',
    description: 'Daily sync with the development team at 10 AM',
    priority: 'Medium',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Update Documentation',
    description: 'Revise API docs to reflect latest endpoint changes',
    priority: 'Low',
    status: 'Pending'
  },
  {
    id: 4,
    title: 'Code Review',
    description: 'Review pull requests from frontend and backend teams',
    priority: 'High',
    status: 'Pending'
  }
];

let nextId = 5;

function getStats() {
  return {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'Pending').length,
    inProgress: tasks.filter(t => t.status === 'In Progress').length,
    completed: tasks.filter(t => t.status === 'Completed').length
  };
}

app.get('/', (req, res) => {
  res.render('dashboard', {
    tasks,
    stats: getStats(),
    message: req.query.message || null,
    messageType: req.query.messageType || 'success'
  });
});

app.get('/task/add', (req, res) => {
  res.render('add-task', { error: null });
});

app.post('/task/add', (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !title.trim()) {
    return res.render('add-task', { error: 'Task title is required.' });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    description: description ? description.trim() : '',
    priority: priority || 'Medium',
    status: 'Pending'
  };

  tasks.push(newTask);
  res.redirect('/?message=Task+added+successfully!&messageType=success');
});

app.get('/task/edit/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.redirect('/?message=Task+not+found.&messageType=danger');
  res.render('edit-task', { task, error: null });
});

app.post('/task/edit/:id', (req, res) => {
  const { title, description, priority } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) return res.redirect('/?message=Task+not+found.&messageType=danger');

  if (!title || !title.trim()) {
    return res.render('edit-task', { task: tasks[taskIndex], error: 'Task title is required.' });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title.trim(),
    description: description ? description.trim() : '',
    priority: priority || tasks[taskIndex].priority
  };

  res.redirect('/?message=Task+updated+successfully!&messageType=success');
});

app.post('/task/delete/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.redirect('/?message=Task+not+found.&messageType=danger');
  tasks.splice(taskIndex, 1);
  res.redirect('/?message=Task+deleted+successfully!&messageType=warning');
});

app.post('/task/status/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.redirect('/?message=Task+not+found.&messageType=danger');

  const statusFlow = ['Pending', 'In Progress', 'Completed'];
  const currentIndex = statusFlow.indexOf(task.status);
  task.status = statusFlow[(currentIndex + 1) % statusFlow.length];

  res.redirect('/?message=Status+updated+to+' + encodeURIComponent(task.status) + '!&messageType=info');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ TodoApp running at http://localhost:${PORT}`);
});
