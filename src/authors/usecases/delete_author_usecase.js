const authorsDao = require('../authors_dao');

module.exports.deleteAuthor = async (authorId) => {
        await authorsDao.delete(authorId);
        return Promise.resolve();
};