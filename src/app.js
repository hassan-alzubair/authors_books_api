const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const booksRoutes = require('./books/books_routes');
const authersRoutes = require('./authors/authors_routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/books', booksRoutes);
app.use('/authors',authersRoutes);

app.use((req, res, next) => {
    let error = new Error('not found');
    error.code = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.code || 500).json({
        'message': error.message
    });
});

module.exports = app;