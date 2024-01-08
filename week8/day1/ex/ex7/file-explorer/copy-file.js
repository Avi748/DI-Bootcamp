const fs = require('fs');

const info = fs.readFile('source.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err.message);
    console.log(data)
        fs.writeFile('destination.txt', data, 'utf-8', error => {
        if(error) return console.log(error.message);
        console.log("File created");
    })
})

info