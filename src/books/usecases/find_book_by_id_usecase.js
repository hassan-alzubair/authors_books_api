const booksDao = require('../books_dao');

module.exports.findBookById = async (bookId) => {
    try {
        let result = await booksDao.findById(bookId);        
        return Promise.resolve(result);
    } catch (error) {
        throw error
    }
}