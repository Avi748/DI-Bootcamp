import axios from 'axios';
// const axios = require('axios');

//Using require
// const getUsers = async() => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         // console.log(response.data);
//         return response.data
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports = {
//     getUsers
// }

//Using import 
export const getUsers = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
};