const mongoose = require('mongoose');
require('./books');
require('./user');

const PostSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  comment: {
    type: String, 
    required: true,
  },
},
{
  timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;