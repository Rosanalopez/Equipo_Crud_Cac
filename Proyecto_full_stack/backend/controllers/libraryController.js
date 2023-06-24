const Library = require('../models/libraryModel');


// GENRE -----------------------------------------------------
// Get all genres
exports.getAllGenres = async (req, res, next) => {
    try {
        const genres = await Library.genreModel.findAll();
        res.status(200).json({
            status: 'success',
            results: genres.length,
            data: {
                genres
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Get a genre by id
exports.getGenre = async (req, res, next) => {
    try {
        const genre = await Library.genreModel.findByPk(req.params.id);
        if (!genre) {
            return res.status(404).json({
                status: 'fail',
                message: 'No genre found with that ID'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                genre
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Create a genre
exports.createGenre = async (req, res, next) => {
    try {
        const genre = await Library.genreModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                genre
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Update a genre
exports.updateGenre = async (req, res, next) => {
    try {
        const genre = await Library.genreModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            status: 'success',
            data: {
                genre
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Delete a genre
exports.deleteGenre = async (req, res, next) => {
    try {
        await Library.genreModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
}


// AUTHORS -----------------------------------------------------
// Get all Authors
exports.getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Library.authorModel.findAll();
        res.status(200).json({
            status: 'success',
            results: authors.length,
            data: {
                authors
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Get an author by id
exports.getAuthor = async (req, res, next) => {
    try {
        const author = await Library.authorModel.findByPk(req.params.id);
        if (!author) {
            return res.status(404).json({
                status: 'fail',
                message: 'No author found with that ID'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                author
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Create an author
exports.createAuthor = async (req, res, next) => {
    try {
        const author = await Library.authorModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                author
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Update an author
exports.updateAuthor = async (req, res, next) => {
    try {
        const author = await Library.authorModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            status: 'success',
            data: {
                author
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Delete an Author
exports.deleteAuthor = async (req, res, next) => {
    try {
        await Library.authorModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
}


// BOOKS -----------------------------------------------------
// Get all Books
exports.getAllBooks = async (req, res, next) => {
    if (req.query.page || req.query.limit) {
        return getPaginateBooks(req, res, next);
    } 

    try {
        const books = await Library.bookModel.findAll();
        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Get a Book by id
exports.getBook = async (req, res, next) => {
    try {
        const book = await Library.bookModel.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({
                status: 'fail',
                message: 'No author found with that ID'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                book
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Create a Book
exports.createBook = async (req, res, next) => {
    try {
        const book = await Library.bookModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                book
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Update a Book
exports.updateBook = async (req, res, next) => {
    try {
        const book = await Library.bookModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            status: 'success',
            data: {
                book
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
};

// Delete an Book
exports.deleteBook = async (req, res, next) => {
    try {
        await Library.bookModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
}


// PAGINATION -----------------------------------------------------
const getPaginateBooks = async (req, res, next) => {
    try {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 10;
        const skip = (page - 1) * limit;

        const books = await Library.bookModel.findAll({
            limit,
            offset: skip
        });

        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail'
        });
    }
}