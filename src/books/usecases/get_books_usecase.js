const booksDao = require('../books_dao');

module.exports.allBooks = async () => {
    try {
        let result = await booksDao.listAll();
        return Promise.resolve(result);
    } catch (error) {
        throw error;
    }
}