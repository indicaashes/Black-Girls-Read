const Book = require('../../models/books');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
    const booksData = await Book.find({}).populate('genre').exec();
  res.send(booksData)
console.log(booksData)
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
