const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  posterPath: String,
  author: String,
  title: String,
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
  maturity: String,
});

module.exports= mongoose.model('Book', bookSchema);
