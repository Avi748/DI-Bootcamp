const axios = require('axios');

const fetchPosts = async() => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    } catch (error) {
        console.log(error);
    }
};

function getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)
}

module.exports = {fetchPosts, getPosts}