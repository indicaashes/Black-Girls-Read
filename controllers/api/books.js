const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Book = require('../../models/book');

module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    edit,
    update,
  };
  
  async function index(req, res) {
    const books = await Book.find({ bookStatus: 'Desired' });
    res.render('books/index', { title: 'Books We Love', books});
  }
  
  async function show(req, res) {
    try {
      const book = await Book.findById(req.params.id).populate('notes');
      res.render('books/show', { title: '', book });
    } catch (err) {
      console.error('Error fetching book details:', err);
      res.redirect('/books');
    }
  }
  
  function newBook(req, res) {
    res.render('books/new', { title: 'Add book', errorMsg: '' });
  }
  
  async function create(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.redirect('/books');
    } catch (err) {
      console.error('Error creating book:', err);
      res.redirect('/books/new');
    }
  }
  
  async function deleteBook(req, res) {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.redirect('/books');
    } catch (err) {
      console.error('Error deleting book:', err);
      res.redirect(`/books/${req.params.id}`);
    }
  }
  
  async function edit(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      res.render('books/edit', {
        title: 'Edit book',
        book,
      });
    } catch (err) {
      console.error('Error fetching book details:', err);
      res.redirect('/books');
    }
  }
  
  async function update(req, res) {
    try {
      const updatedbook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.redirect(`/books/${updatedbook._id}`);
    } catch (err) {
      console.error('Error updating book:', err);
      res.redirect(`/books/${req.params.id}`);
    }
  }
