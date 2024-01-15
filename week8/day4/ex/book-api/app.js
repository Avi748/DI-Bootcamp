const express = require('express');
const {books_router} = require('./routes/books.router.js');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(5000, () => {
    console.log('run on port 5000');
});

app.use(books_router);