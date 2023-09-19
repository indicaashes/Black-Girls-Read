const express = require('express');
const router = express.Router();
const Genre = require('../models/genre'); 

const Book = require('../models/book');   


router.get('/genres', async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.post('/books', async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding a book:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
