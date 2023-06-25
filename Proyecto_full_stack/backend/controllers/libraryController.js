const Library = require('../models/libraryModel');


// GÉNERO -----------------------------------------------------
// Obtiene todos los géneros
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

// Obtiene un género por id
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

// Crear un género
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

// Actualiza un género
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

// Elimina un género
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


// AUTORES -----------------------------------------------------
// Obtener todos los autores
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

// Obtener un autor por id
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

// Crear un autor
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

// Actualiza un autor
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

// Elimina un autor
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


// LIBROS -----------------------------------------------------
// Obtiene todos los libros
// Si hay una query de consulta, usa la paginación
// Si no, devuelve 1000 libros
exports.getAllBooks = async (req, res, next) => {
    page = req.query.page || 1;
    limit = req.query.limit || 1000;
    books_count = await Library.bookModel.count();

    return getPaginateBooks(res, page, limit, books_count);
};

// Obtiene un libro por id
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

// Crea un libro
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

// Actualiza un libro
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

// Elimina un libro
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


// PAGINACIÓN -----------------------------------------------------
const getPaginateBooks = async (res, page, limit, books_count = 0) => {
    try {
        const skip = (page - 1) * limit;

        const books = await Library.bookModel.findAll({
            limit,
            offset: skip
        });

        res.status(200).json({
            status: 'success',
            results: Math.max(books.length, books_count),
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