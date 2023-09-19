const DiscussionPost = require('../../models/discussion'); 


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


const updateDiscussion = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { details } = req.body;

    const updatedDiscussion = await DiscussionPost.findByIdAndUpdate(
      discussionId,
      { details },
      { new: true } 
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
