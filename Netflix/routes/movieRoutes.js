const express = require("express");
const router = express.Router();

const multer = require("multer");
const movieController = require("../controllers/movieController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Only images allowed"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

router.get("/", movieController.index); 

router.get("/movies", movieController.index);

router.get("/addMovie", movieController.addMovie);

router.post("/addMovie", upload.single("poster"), movieController.createMovie);

router.get("/viewMovie", movieController.viewMovie);    

router.get("/editMovie/:id", movieController.editMovie); 

router.post("/editMovie/:id", movieController.updateMovie);

router.get("/deleteMovie/:id", movieController.deleteMovie);

router.get("/movieDetails/:id", movieController.movieDetail);

module.exports = router;