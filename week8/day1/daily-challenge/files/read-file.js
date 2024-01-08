import fs from 'fs'

export const read = () => {
    fs.readFile('file-data.txt', 'utf-8', (err, data) => {
        if(err) return console.log(err.message);
        console.log(data);
    })
}