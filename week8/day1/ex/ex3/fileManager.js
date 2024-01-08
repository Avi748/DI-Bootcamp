const fs = require('fs');

const read = () => {
    fs.readFile('HelloWorld.txt', 'utf-8', (err, data) => {
        if(err) return console.log(err.message);
        console.log(data);
    })
}

let text = "Writing to the file";

const write = () => {
    fs.writeFile('ByeWorld.txt', text, 'utf-8', (err) => {
        if(err) return console.log(err.message);
    })
}

module.exports = {read, write}
