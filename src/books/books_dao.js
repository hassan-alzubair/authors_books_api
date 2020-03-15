const models = require('../models/index');
const Book = models.book;

module.exports.listAll = async () => {
    let options = {
        include: [
            {model: models.author, as: 'author'}
        ]
    };
    try {
        return await Book.findAll(options)
    } catch (error) {
        throw error;
    }
};

module.exports.create = async (book) => {
    try {
        return await Book.create(book);
    } catch (error) {
        throw error
    }
};

module.exports.findById = async (bookId) => {
    let options = {
        where: {
            id: bookId
        }
    };
    try {
        return await Book.findOne(options);
    } catch (error) {
        throw error
    }
};

module.exports.update = async (bookId, book) => {
    let options = {
        where: {
            id: bookId
        }
    };
    try {
        await Book.update(book, options);
    } catch (error) {
        throw error
    }
};

module.exports.delete = async (bookId) => {
    let options = {
        where: {
            id: bookId
        }
    };
    try {
        await Book.destroy(options);
    } catch (error) {
        throw error
    }
};