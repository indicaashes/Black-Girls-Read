const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// Create a new post
router.post('/', postsCtrl.createPost);

// Fetch posts for a specific book
router.get('/book/:bookId', postsCtrl.getPostsForBook);

// Update a post
router.put('/:postId', postsCtrl.updatePost);

// Delete a post
router.delete('/:postId', postsCtrl.deletePost);

module.exports = router;
