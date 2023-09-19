const express = require('express');
const router = express.Router();
const { index, show } = require('../../controllers/api/books');

router.get('/books', index);
router.get('/books/:id', show);

module.exports = router;

