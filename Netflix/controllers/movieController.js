const Movie = require('../models/movieSchema');

exports.index = async (req, res) => {
  const movies = await Movie.find();
  res.render("index", { movies });
};

exports.addMovie = (req, res) => {
    res.render("addMovie")
}   

exports.createMovie = async (req, res) => {
  const newMovie = new Movie({
  title: req.body.title,
  languages: req.body.languages?.split(","),
  desc: req.body.desc,
  releaseYear: req.body.releaseYear,
  genre: req.body.genre,
  rating: req.body.rating,
  actors: req.body.actors?.split(","),
  director: req.body.director?.split(","),
  duration: req.body.duration,
  image: req.file ? req.file.filename : null
  });
  await newMovie.save();

  res.redirect("/movies");
};

exports.viewMovie = async (req, res) => {
    const movies = await Movie.find();
    res.render("viewMovie", { movies });
};

exports.editMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("editMovie", { movie });
};

exports.updateMovie = async (req, res) => {
    const updateData = {
        title: req.body.title,
        languages: req.body.languages?.split(","),
        desc: req.body.desc,
        releaseYear: req.body.releaseYear,
        genre: req.body.genre,
        rating: req.body.rating,
        actors: req.body.actors?.split(","),
        director: req.body.director?.split(","),
        duration: req.body.duration
    };

    if (req.file) {
        updateData.image = req.file.filename;
    }

    await Movie.findByIdAndUpdate(req.params.id, updateData);
    res.redirect("/viewMovie");
};

exports.deleteMovie = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies")
}

exports.movieDetail = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("movieDetails", { movie });
};