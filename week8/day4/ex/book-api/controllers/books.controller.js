const {_getAllBooks, _getBook, _addBook, _updateBook, _deleteBook} = require('../models/books.models.js');


const getAllBooks = (req, res) => {
    _getAllBooks()
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Not Found'})
    })
};

const getBook = async (request, response) => {
    console.log(request.params);
    const {id} = request.params;
    try {
        const data = await _getBook(id);
        if (data.length === 0) return res.status(404).json({ msg: "Book not found" });
        response.status(200).json(data)
    } catch (error) {
        return response.status(404).json({msg: 'Book not found'});
    }
};

const addBook = (req, res) => {
    console.log(req.body);
    const {title, author, publishedyear} = req.body
    _addBook(title, author, publishedyear)
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.status(404).json({msg: 'can not add a new book'})
    })
};


const updateBook = (req, res) => {
    const {id} = req.params;
    const {title, author, publishedyear} = req.body;
    _updateBook(id, title, author, publishedyear)
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Book id not found'});
    })
};


const deleteBook = (req, res) => {
    const {id} = req.params
    _deleteBook(id)
    .then(data => {
        res.json(data)
    })
    .catch((error) => {
        res.status(404).json({msg: 'Book id not found'});
    })
};

module.exports = {getAllBooks, getBook, addBook, updateBook, deleteBook};