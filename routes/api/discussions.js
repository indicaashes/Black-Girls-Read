const express = require('express');
const router = express.Router();
const discussionsCtrl = require('../../controllers/api/discussions');

// Create a new discussion
router.post('/discussions', discussionsCtrl.createDiscussion);

// Fetch discussions for a specific book
router.get('/discussions/:bookId', discussionsCtrl.getDiscussionsForBook);

// Update a discussion
router.put('/discussions/:discussionId', discussionsCtrl.updateDiscussion);

// Delete a discussion
router.delete('/discussions/:discussionId', discussionsCtrl.deleteDiscussion);

module.exports = router;
