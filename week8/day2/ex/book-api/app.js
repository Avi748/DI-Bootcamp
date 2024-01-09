const express = require('express');

const data = [
    {id: 1, title: "Book1", author: "Book1 Author", publishedYear: "2023"},
    {id: 2, title: "Book2", author: "Book2 Author", publishedYear: "2001"},
    {id: 3, title: "Book3", author: "Book3 Author", publishedYear: "1998"}
];

const book = express();
book.listen(5000);

book.get("/api/books", (request, response) => {
    response.json(data)
});

book.get("/api/books/:bookId", (request, response) => {
    const {bookId} = request.params;
    const book_id = data.find(item => item.id == bookId);
    if(!book_id){
        return response.status(404).json({msg: 'Book not found'});
    }else{
        return response.status(200), response.json(book_id)
    }
});