const booksDao = require('../books_dao');

module.exports.findBookById = async (bookId) => {
    let result = await booksDao.findById(bookId);
    return Promise.resolve(result);
}