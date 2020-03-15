const router = require('express').Router();
const booksController = require('./books_controller');

router.get('/', booksController.allBooks);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;