const authorsDao = require('../authors_dao');

module.exports.deleteAuthor = async (authorId) => {
    try {
        await authorsDao.delete(authorId);
        return Promise.resolve();
    } catch (error) {
        throw error
    }
};