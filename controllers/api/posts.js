const Post = require('../../models/post'); 


const createPost = async (req, res) => {
  try {
    const { book, user, comment } = req.body;

    const post = new Post({
      book,
      user,
      comment,
    });

    await post.save();

    return res.status(201).json({ message: 'Post created successfully', post });
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const getPostsForBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const posts = await Post.find({ bookId }).populate([{path: 'book', select: 'title'}, {path: 'user', select: 'name'}]);

    return res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { comment },
      { new: true } 
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post updated successfully', updatedPost});
  } catch (error) {
    console.error('Error updating post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  createPost,
  getPostsForBook,
  updatePost,
  deletePost,
};
