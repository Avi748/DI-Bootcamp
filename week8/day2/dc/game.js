const express = require('express');
const bp = require('body-parser')

const app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

app.listen(3000, () => {
    console.log('Game is runing');
});

app.use('/' , express.static(__dirname + '/resource'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '💘', name: 'Heart' },
    { emoji: '💋', name: 'Kiss' },
    { emoji: '🎅', name: 'Santa' },
    { emoji: '🐆', name: 'Leopard' },
    { emoji: '🐴', name: 'Horse' },
    { emoji: '🐮', name: 'Cow' },
    { emoji: '🐷', name: 'Pig' }
];

app.get("/emoji", (request, response) => {
    response.json(emojis)
});

app.post('/emoji', (req, res) => {
    console.log(req.body);
    res.json(emojis)
})