// const {getUsers} = require('./script.js')
import {getUsers} from './script.js';

getUsers()
.then((res) => {
    res.forEach(element => {
        console.log(element.name);
    });
});