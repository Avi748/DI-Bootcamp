const axios = require('axios');

const fetchPosts = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await response
        return data
    } catch (error) {
        console.log(error);
    }
};

module.exports = {fetchPosts}