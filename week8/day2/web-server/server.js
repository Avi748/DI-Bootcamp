/** API
 * Restfull API
 * CRUD
 */

const express = require('express');

const app = express();
app.listen(3001, () => {
    console.log('run on port 3001');
});

app.use('/' , express.static(__dirname + '/public'));

/**
 * app.get
 * app.post
 * app.put
 * app.delete
 */

const users = [
    {id:1, name:'John', email:"John@gmail.com"},
    {id:2, name:'Marry', email:"Mary@gmail.com"},
    {id:3, name:'Anne', email:"Anne@gmail.com"},
];

app.get("/users", (request, response) => {
    response.json(users)
});

//params
app.get("/users/:id", (request, response) => {
    console.log(request.params);
    const {id} = request.params;
    const user = users.find(item => item.id == id);
    if(!user) return response.status(404).json({msg: 'User not found'});
    response.json(user)
});

//query
app.get('/search', (req, res) => {
    console.log(req.query);
    const {name} = req.query;
    const filtername = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(filtername.length === 0){
        return res.status(404).json({msg: "User not found"})
    }
    res.json(filtername)
})


// app.get("/api", (request, response) => {
//     response.send("<h1>Hello</h1>")
// });

// app.post("/users", (request, response) => {
//     response.send("<h1>Hello</h1>")
// });