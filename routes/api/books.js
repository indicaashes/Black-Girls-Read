const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', booksCtrl.index);
router.get('/new', ensureLoggedIn, booksCtrl.new);
router.get('/:id', booksCtrl.show);
router.get('/:id/edit', ensureLoggedIn, booksCtrl.edit);
router.post('/', ensureLoggedIn, booksCtrl.create);
router.delete('/:id', ensureLoggedIn, booksCtrl.delete);
router.put('/:id', ensureLoggedIn, booksCtrl.update);

module.exports = router;