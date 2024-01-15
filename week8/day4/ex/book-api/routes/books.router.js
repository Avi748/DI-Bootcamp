const express = require('express');
const {getAllBooks, getBook, addBook, updateBook, deleteBook} = require("../controllers/books.controller.js");

const books_router = express.Router();

books_router.get("/api/books", getAllBooks);

books_router.get("/api/books/:id", getBook);

books_router.post('/api/books', addBook);

books_router.put('/api/books/:id', updateBook);

books_router.delete('/api/books/:id', deleteBook);

module.exports = {books_router};