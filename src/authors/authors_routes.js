const router = require('express').Router();
const authorsController = require('./authors_controller');

router.get('/', authorsController.getAllAuthors);
router.post('/', authorsController.createAuthor);
router.put('/:id', authorsController.updateAuthor);
router.delete('/:id', authorsController.deleteAuthor)

module.exports = router;