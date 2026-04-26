const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/movieproject");
        console.log("MongoDB Connected Successfully...");
    } catch (err) {
        console.log("Error:", err);
    }
};

module.exports = connectDb;