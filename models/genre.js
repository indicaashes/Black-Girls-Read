const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: String,
});

module.exports = mongoose.model('Genre', genreSchema);