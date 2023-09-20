const mongoose = require ('mongoose');
require('./genreSchema');

const bookSchema = require ('./bookSchema');

module.exports= mongoose.model('Book', bookSchema);