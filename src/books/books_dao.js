const models = require('../models/models');
const Book = models.book;

module.exports.listAll = async () => {
    let options = {
        include: [
            { model: models.author, as: 'author' }
        ]
    };
    return Book.findAll(options)
};

module.exports.create = async (book) => {
    return Book.create(book);
};

module.exports.findById = async (bookId) => {
    let options = {
        where: {
            id: bookId
        }
    };
    return Book.findOne(options);
};

module.exports.update = async (bookId, book) => {
    let options = {
        where: {
            id: bookId
        }
    };
    Book.update(book, options);
};

module.exports.delete = async (bookId) => {
    let options = {
        where: {
            id: bookId
        }
    };
    Book.destroy(options);
};