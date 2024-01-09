const express = require('express');
const {fetchPosts} = require('./data/dataService.js');
// console.log(fetchPosts())

const app = express();
app.listen(5000, () => {
    console.log('Server is running');
});

app.get("/data", (request, response) => {
    try {
        response.send(fetchPosts())
        
    } catch (error) {
        console.log(error)
    }
});