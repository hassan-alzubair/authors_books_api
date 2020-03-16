const booksDao = require('../books_dao');

module.exports.updateBook = async (bookId, book) => {
    let result = await booksDao.findById(bookId);
    if (!result) {
        let error = new Error();
        error.message = 'book not found';
        error.code = 404;
        throw error;
    }
    await booksDao.update(bookId, book);
    return Promise.resolve();
}