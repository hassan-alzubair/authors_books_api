const getBooksUseCase = require('./usecases/get_books_usecase');
const createBookUseCase = require('./usecases/create_book_usecase');
const findBookByIdUseCase = require('./usecases/find_book_by_id_usecase');
const updateBookUseCase = require('./usecases/update_book_usecase');
const deleteBookUseCase = require('./usecases/delete_book_usecase');

module.exports.allBooks = () => getBooksUseCase.allBooks();
module.exports.createBook = (book) => createBookUseCase.createBook(book);
module.exports.findBookById = (bookId) => findBookByIdUseCase.findBookById(bookId);
module.exports.updateBook = (bookId, book) => updateBookUseCase.updateBook(bookId, book)
module.exports.deleteBook = (bookId) => deleteBookUseCase.deleteBook(bookId);