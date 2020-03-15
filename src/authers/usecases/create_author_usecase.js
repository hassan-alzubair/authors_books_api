const authorsDao = require('../authors_dao');

module.exports.createAuthor = async (author) => {
    try {
        let result = await authorsDao.create(author);
        return Promise.resolve(result);
    } catch (error) {
        throw error
    }
};