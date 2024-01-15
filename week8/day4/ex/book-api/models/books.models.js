const {db} = require('../config/db.js');

const _getAllBooks = () => {
    return db('books').select('*').orderBy('id')
}

const _getBook = (bookId) => {
    return db('books').select('*').where({id:bookId})
}

const _addBook = (title, author, publishedyear) => {
    return db('books')
    .insert({title:title, author:author, publishedyear:publishedyear})
    .returning('*')
}

const _updateBook = (bookId, title, author, publishedyear) => {
    return db('books').update({title:title, author:author, publishedyear:publishedyear}).where({id:bookId})
}

const _deleteBook = (bookId) => {
    return db('books').where({id:bookId}).del()
}

module.exports = {_getAllBooks, _getBook, _addBook, _updateBook, _deleteBook}