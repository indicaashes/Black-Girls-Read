const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  genre: String,
  sortBook: Number,
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
