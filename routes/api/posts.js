const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// Create a new post
router.post('/posts', postsCtrl.createPost);

// Fetch posts for a specific book
router.get('/posts/book/:bookId', postsCtrl.getPostsForBook);

// Update a post
router.put('/posts/:postId', postsCtrl.updatePost);

// Delete a post
router.delete('/posts/:postId', postsCtrl.deletePost);

module.exports = router;
