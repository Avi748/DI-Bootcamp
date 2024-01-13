const express = require('express');

const app_router = express.Router();

const books = [
    {id:1, name:"book1", author:"book1 author"},
    {id:2, name:"book2", author:"book2 author"},
    {id:3, name:"book3", author:"book3 author"},
];

app_router.get("/books" , (req, res) => {
    res.json(books);
});

app_router.post("/books" , (req, res) => {
    console.log(req.body);
    const new_book = {...req.body, id:books.length + 1};
    books.push(new_book);
    res.status(201).json(books);
});

app_router.put("/books/:id" , (req, res) => {
    const {id} = req.params;
    const {name, author} = req.body;
    const index = books.findIndex(book => book.id == id);

    if(index === -1) return res.sendStatus(404);
    books[index] = {...books[index], name:name, author:author};
    res.json(books);
});

app_router.delete("/books/:id" , (req, res) => {
    const {id} = req.params
    const index = books.findIndex(book => book.id == id);

    if(index === -1) return res.sendStatus(404);
    books.splice(index, 1);
    res.json(books);
});


module.exports = {app_router};