const booksDao = require('../books_dao');

module.exports.createBook = async (book) => {
    const result = await booksDao.create(book);
    return Promise.resolve(result);
}