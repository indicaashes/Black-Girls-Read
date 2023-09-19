const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  posterPath: String,
  author: String,
  title: String,
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
  maturity: String,
});

module.exports= mongoose.model('Book', bookSchema);
