const express = require('express');
const port = 9000;
const app = express();

const connectDb = require('./config/db');
connectDb();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // ✅ extended option added
app.use(express.static('public'));

const movieRoutes = require("./routes/movieRoutes");
app.use("/", movieRoutes);

app.listen(port, (err) => {
    if (err) {
        console.log("Error to Start Server......");
    } else {
        console.log(`Server running at http://localhost:${port}`);
    }
});