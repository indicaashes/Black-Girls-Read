const mongoose = require('mongoose');

const { Schema } = mongoose; 

const bookSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    bookInfo: {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      authors: {
        type: String,
        required: true,
      },
      genre: {
        type: Schema.Types.ObjectId, 
        ref: 'Genre',
        required: true,
      },
      maturityRating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'MA'],
        required: true,
      },
      bookRating: {
        type: Number,
      },
      botm: {
        type: Boolean,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema);
