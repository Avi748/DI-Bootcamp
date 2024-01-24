const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3001, () => {
    console.log('run on port 3001');
});

app.get("/hello", (req, res) => {
    res.json({greeting: "Hello"})
    // res.send("Hello Text")
})

app.get("/hello/:name", (req, res) => {
    res.json({greeting: `Hello, ${req.params.name}`})
    // res.send(`Hello Text, ${req.params.name}`)
})