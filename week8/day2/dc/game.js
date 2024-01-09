const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log('Game is runing');
});

app.use('/' , express.static(__dirname + '/resource'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

app.get("/emoji", (request, response) => {
    response.json(emojis)
});