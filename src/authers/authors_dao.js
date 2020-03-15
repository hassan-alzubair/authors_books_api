const models = require('../models/index');
const Author = models.author;

module.exports.getAll = async () => {
    let options = {
        include: [
            { model: models.book, as: 'books' }
        ]
    };
    try {
        return await Author.findAll(options);
    } catch (error) {
        throw error
    }
};

module.exports.create = async (author) => {
    try {
        return  await Author.create(author);
    } catch (error) {
        console.log(error)
        throw error
    }
};

module.exports.delete = async (authorId) => {
    let options = {
        where: {
            id: authorId
        }
    };
    try {
        await Author.destroy(options);
    } catch (err) {
        throw err
    }
};

module.exports.update = async (authorId, author) => {
    let options = {
        where: {
            id: authorId
        }
    };
    try {
        await Author.update(author, options)
    } catch (error) {
        throw error
    }
};

module.exports.findById = async (authorId) => {
    let options = {
        where: {
            id: authorId
        }
    };
    try {
        return await Author.findOne(options)
    } catch (error) {
        throw error
    }
};