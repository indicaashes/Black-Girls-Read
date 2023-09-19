const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  posterPath: String,
  author: String,
  title: String,
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
  maturity: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
