const authorsDao = require('../authors_dao');

module.exports.updateAuthor = async (authorId, author) => {
    try {
        let result = await authorsDao.findById(authorId);
        if (!result) {
            let error = new Error();
            error.message = 'author not found';
            error.code = 404;
            throw error
        }
        await authorsDao.update(authorId, author);
        return Promise.resolve()
    } catch (error) {
        throw error
    }
};