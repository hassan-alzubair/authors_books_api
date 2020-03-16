const authorsDao = require('../authors_dao');

module.exports.getAllAuthors = async () => {
    let result = await authorsDao.getAll();
    return Promise.resolve(result);
};