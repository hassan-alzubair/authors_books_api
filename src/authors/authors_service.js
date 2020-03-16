const createAuthorUsecase = require('./usecases/create_author_usecase');
const deleteAuthorUsecase = require('./usecases/delete_author_usecase');
const getAllAuthorsUsecase = require('./usecases/get_all_authors_usecase');
const updateAuthorUsecase = require('./usecases/update_author_usecase');


module.exports.createAuthor = (author) => createAuthorUsecase.createAuthor(author)
module.exports.deleteAuthor = (authorId) => deleteAuthorUsecase.deleteAuthor(authorId);
module.exports.getAllAuthors = () => getAllAuthorsUsecase.getAllAuthors();
module.exports.updateAuthor = (authorId, author) => updateAuthorUsecase.updateAuthor(authorId, author);