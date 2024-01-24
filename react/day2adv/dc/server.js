const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3001, () => {
    console.log('run on port 3001');
});

app.get("/api/hello", (req, res) => {
    res.send("Hello From Express");
})

app.get("/api/world/:message", (req, res) => {
    res.json({message: `I received your POST request. This is what you sent me: ${req.params.message}`})
})