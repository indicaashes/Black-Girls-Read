const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  genre: String,
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
