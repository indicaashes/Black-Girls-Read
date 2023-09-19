const Book = require('../../models/book');

const books = [];

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
    const booksData = await Book.find({}).sort('name').populate('genre').exec();

    const sortedBooks = booksData.sort((a, b) => a.genre.sortBook - b.genre.sortBook);
    res.json(sortedBooks);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
}

async function show(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    console.error('Error fetching book:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
}
