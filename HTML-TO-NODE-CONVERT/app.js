const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

const dashboardRoutes = require('./routes/dashboard');
app.use('/', dashboardRoutes);

const { buttons } = require('./controllers/buttonsController');
app.use('/buttons', buttons);

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});