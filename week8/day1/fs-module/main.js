const fs = require('fs');
const path = require('path');
const fsP = require('fs').promises;

const read = async() => {
    const data = await fsP.readFile('info', 'utf-8');
    console.log(data);
}
read()

/** Sync / Async - default */
// //Sync
// try{
//     const data = fs.readFileSync('info.txt', 'utf-8');
//     console.log(data);
// }catch(error){
//     console.log(error.message)
// }

// //Async

// const info = fs.readFile('info.txt', 'utf-8', (err, data) => {
//     if(err) return console.log(err.message);

//     console.log(data)
// })

// let data = 'append'

//Create a new file
// fs.writeFile('newfile', data, 'utf-8', error => {
//     if(error) return console.log(error.message);
    
//     console.log("File created");
// });

//Append to the file
// fs.appendFile('newfile', data, 'utf-8', error => {
//     if(error) return console.log(error.message);
//     console.log("appended")
// })

//Cope file
// fs.copyFile('info.txt', 'info', error => {
//     if(error) return console.log(error);
// })

//Create a new folder
// fs.mkdir('utils', (error) => {
// })