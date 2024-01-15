const express = require('express');
const bcrypt = require('bcrypt');
const {db} = require('./config/db.js')
const {users_router} = require('./routes/users.router.js')

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, () => {
    console.log('run on port 3000');
});

app.use(users_router);

app.set('view-engine', 'ejs');

let username = "user"

app.get('/', (req, res) => {
    res.render('index.ejs', {name:username})
});

app.get('/login', (req, res) => {
    res.render('login.ejs')
});

app.post('/login', async (req, res) => {
    try {
        const {name, password} = req.body;
        (await db('users').select('name', 'password')).forEach(user => {
            if((user.name == name) && (user.password == password)){
                username = user.name
                res.redirect('/')
            }else{
                res.redirect('/login')
            }
        })
    } catch (error) {
        console.log(error);
    }
});

app.get('/register', (req, res) => {
    res.render('register.ejs')
});

app.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        return db('users')
        .insert({name:name, email:email, password:hashedPassword})
        .returning('*')
        .then(data => {
            res.json(data)
            res.redirect('/login')
        })
    } catch (error) {
        res.redirect('/register')
    }
});