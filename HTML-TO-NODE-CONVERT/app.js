const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

app.get('/buttons', (req, res) => {
  res.render('buttons', { title: 'Buttons' });
});

app.get('/dropdowns', (req, res) => {
  res.render('dropdowns', { title: 'Dropdowns' });
});

app.get('/typography', (req, res) => {
  res.render('typography', { title: 'Typography' });
});

app.get('/charts', (req, res) => {
  res.render('charts', { title: 'Charts' });
});

app.get('/basic-elements', (req, res) => {
  res.render('basic-elements', { title: 'Basic-Elements' });
});

app.get('/tables', (req, res) => {
  res.render('tables', { title: 'Tables' });
});

app.get('/font-awesome', (req, res) => {
  res.render('font-awesome', { title: 'Font-Awesome' });
});

app.get('/blank-page', (req, res) => {
  res.render('blank-page', { title: 'Blank-Page' });
});

app.get('/error-404', (req, res) => {
  res.render('error-404', { title: 'Error-404' });
});

app.get('/error-500', (req, res) => {
  res.render('error-500', { title: 'Error-500' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

app.get('/documentation', (req, res) => {
  res.render('documentation', { title: 'Documentation' });
});


app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(8000, () => console.log('Running on http://localhost:8000'));