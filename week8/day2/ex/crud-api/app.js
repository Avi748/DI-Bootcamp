const express = require('express');
const {fetchPosts, getPosts} = require('./data/dataService.js');
// fetchPosts().then(res => {
//     console.log(res);
// })

const app = express();
app.listen(5000, () => {
    console.log('Server is running');
});

app.get("/posts", getPosts);