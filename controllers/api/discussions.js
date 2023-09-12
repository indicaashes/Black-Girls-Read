const DiscussionPost = require('../../models/discussion'); // Import your Mongoose model


// Create a new discussion post
const createDiscussion = async (req, res) => {
  try {
    const { bookId, month, year, details } = req.body;

    const discussion = new DiscussionPost({
      bookId,
      month,
      year,
      details,
    });

    await discussion.save();

    return res.status(201).json({ message: 'Discussion created successfully', discussion });
  } catch (error) {
    console.error('Error creating discussion:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get discussions for a specific book
const getDiscussionsForBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const discussions = await DiscussionPost.find({ bookId });

    return res.status(200).json({ discussions });
  } catch (error) {
    console.error('Error fetching discussions:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a discussion post
const updateDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { details } = req.body;

    const updatedDiscussion = await DiscussionPost.findByIdAndUpdate(
      discussionId,
      { details },
      { new: true } // Return the updated discussion
    );

    if (!updatedDiscussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    return res.status(200).json({ message: 'Discussion updated successfully', updatedDiscussion });
  } catch (error) {
    console.error('Error updating discussion:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a discussion post
const deleteDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;

    const deletedDiscussion = await DiscussionPost.findByIdAndDelete(discussionId);

    if (!deletedDiscussion) {
      return res.status(404).json({ error: 'Discussion not found' });
    }

    return res.status(200).json({ message: 'Discussion deleted successfully' });
  } catch (error) {
    console.error('Error deleting discussion:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createDiscussion,
  getDiscussionsForBook,
  updateDiscussion,
  deleteDiscussion,
};
