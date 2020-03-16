const authorsService = require('./authors_service');

module.exports.createAuthor = async (req, res) => {
    let author = req.body;
    try {
        let result = await authorsService.createAuthor(author);
        res.status(201).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(error.code || 500).json({
            error: error.message
        })
    }
};

module.exports.deleteAuthor = async (req, res) => {
    let authorId = req.params.id;
    authorsService.deleteAuthor(authorId)
        .then(() => {
            res.status(200).json()
        })
        .catch(err => {
            console.log(err.message)
            res.status(err.code || 500).json({
                error: err.message
            })
        })
};

module.exports.getAllAuthors = async (req, res) => {
    try {
        let result = await authorsService.getAllAuthors();
        res.status(200).json(result)
    } catch (error) {
        console.log(error.message)
        res.status(error.code || 500).json({
            'error': error.message
        })
    }
};

module.exports.updateAuthor = async (req, res) => {
    let authorId = req.params.id;
    let author = req.body;

    authorsService.updateAuthor(authorId, author)
        .then(() => {
            res.status(200).json()
        })
        .catch(err => {
            console.log(err.message)
            res.status(err.code || 500).json(err)
        })
};