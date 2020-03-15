const booksDao = require('../books_dao');

module.exports.createBook = async (book) => {
    try {
        const result = await booksDao.create(book);
        return Promise.resolve(result);
    } catch (error) {
        throw error
    }
}