const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  details: {
    type: String, 
    required: true,
  },
});

const DiscussionPost = mongoose.model('DiscussionPost', DiscussionSchema);

module.exports = DiscussionPost;