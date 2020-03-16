const models = require('../models/models');
const Author = models.author;

module.exports.getAll = async () => {
    let options = {
        include: [
            { model: models.book, as: 'books' }
        ]
    };
    return Author.findAll(options);
};

module.exports.create = async (author) => {
    return Author.create(author);
};

module.exports.delete = async (authorId) => {
    let options = {
        where: {
            id: authorId
        }
    };
    Author.destroy(options);
    return
};

module.exports.update = async (authorId, author) => {
    let options = {
        where: {
            id: authorId
        }
    };
    Author.update(author, options)
    return
};

module.exports.findById = async (authorId) => {
    let options = {
        where: {
            id: authorId
        }
    };
    return Author.findOne(options)
};