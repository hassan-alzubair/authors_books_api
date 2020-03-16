const booksDao = require('../books_dao');

module.exports.allBooks = async () => {
    let result = await booksDao.listAll();
    return Promise.resolve(result);
}