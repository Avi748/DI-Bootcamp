/** API
 * Restfull API
 * CRUD
 */

const express = require('express');
// const bp = require('body-parser');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

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
/** Read */
app.get("/users/:id", (request, response) => {
    console.log(request.params);
    const {id} = request.params;
    const user = users.find(item => item.id == id);
    if(!user) return response.status(404).json({msg: 'User not found'});
    response.json(user)
});

//query
/** Read */
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

/** Create - a new user - POST*/

app.post('/users', (req, res) => {
    console.log(req.body);
    const new_user = {...req.body, id:users.length + 1};
    users.push(new_user);
    res.status(201).json(users)
})

/** Update -update a user - PUT */
/** user id - to update - params
 * data - name , email to update - body
 */
app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;

    const indx = users.findIndex(item => item.id == id)
    if(indx === -1) return res.sendStatus(404);

    users[indx] = {...users[indx], name:name, email:email};

    res.json(users);
});

/** Delete - delete a user */
/** id as params - delete user */
app.delete('/users/:id', (req, res) => {
    const {id} = req.params

    const indx = users.findIndex(item => item.id == id)
    if(indx === -1) return res.sendStatus(404);

    users.splice(indx, 1);
    res.json(users)
});