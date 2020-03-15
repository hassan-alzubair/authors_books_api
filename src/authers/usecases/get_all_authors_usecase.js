const authorsDao = require('../authors_dao');

module.exports.getAllAuthors = async () => {    
    try {
        let result = await authorsDao.getAll();       
        return Promise.resolve(result);
    } catch (error) {
        throw error
    }
};