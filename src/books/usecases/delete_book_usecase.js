const booksDao = require('../books_dao')

module.exports.deleteBook = async (bookId) => {
    try {
        let result = await booksDao.findById(bookId);
        if(!result){
            let err = new Error();
            err.message = 'book not found'
            err.code = 404
            throw err
        }
        await booksDao.delete(bookId)
        return Promise.resolve();
    } catch (error) {
        throw error
    }
}