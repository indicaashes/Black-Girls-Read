const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  posterPath: {type: String},
  author: {type: String},
  title: {type: String},
  genre: {type: Schema.Types.ObjectId, ref: 'Genre' },
  maturity: {type: String},
});

module.exports= mongoose.model('Book', bookSchema);