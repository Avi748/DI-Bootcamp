const express = require('express')
const {posts_router} = require('./routes/posts.router.js');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, () => {
    console.log('run on port 3000');
});

app.use(posts_router);