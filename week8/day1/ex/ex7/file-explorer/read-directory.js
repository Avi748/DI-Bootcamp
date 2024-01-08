const fs = require('fs');

const readDir = fs.readdir("./", (error, files) => {
    if(error) return console.log(error.message);
    console.log(files)
})

readDir