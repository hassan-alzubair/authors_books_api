const booksService = require('./books_service');

module.exports.allBooks = async (req, res) => {
    try {
        let result = await booksService.allBooks();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(error.code || 500).send({
            error: error.message
        });
    }
};

module.exports.createBook = async (req, res) => {
    let book = req.body;
    try {
        let result = await booksService.createBook(book);
        res.status(201).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(error.code || 500).send({
            error: error.message
        });
    }
}

module.exports.updateBook = async (req, res) => {
    let bookId = req.params.id;
    let book = req.body;
    booksService.updateBook(bookId, book)
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            console.log(err.message)
            res.status(err.code || 500).send({
                error: err.message
            });
        });
}

module.exports.deleteBook = async (req, res) => {
    let bookId = req.params.id;
    booksService.deleteBook(bookId)
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            console.log(err.message)
            res.status(err.code || 500).send({
                error: err.message
            });
        });
};