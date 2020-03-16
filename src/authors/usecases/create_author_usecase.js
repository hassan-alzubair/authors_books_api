const authorsDao = require('../authors_dao');

module.exports.createAuthor = async (author) => {
    let result = await authorsDao.create(author);
    return Promise.resolve(result);
};