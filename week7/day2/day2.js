// let arr = [
//     {id:1, name:'aaa', username:'aaa111'},
//     {id:2, name:'bbb', username:'aaa222'},
//     {id:3, name:'ccc', username:'aaa333'},
// ];

// console.log(arr);

// let arrayJson = JSON.stringify(arr);

// console.log(arrayJson);

// let json = `[
//     {"id":1, "name":"aaa"},
//     {"id":2, "name":"bbb", "username":"aaa222"},
//     {"id":3, "name":"ccc", "username":"aaa333"}
// ]`;

// let arrFromJson = JSON.parse(json);

// console.log(arrFromJson);

// function getX(){
//     console.log('start');
//     let x = 10;
//     try{
//     y
//     }
//     catch(error){
//         console.log(error);
//     }
//     console.log('end')
//     return x;
// }

// let result = getX();
// console.log(result);

// function divideNumbers(num){
//     try{
//         // if(num < 0){
//         //     throw new Error('Please send valid number')
//         // }
//     let arr = new Array(num)
//     return arr
//     }
//     catch(e){
//         return e.stack
//     }
// };

// let result = divideNumbers(-1)
// console.log(result);

// function findElement(arr, i){
//     try {
//         if(i < 0 || i >= arr.length){
//             throw new Error("Index out of range or invalid")
//         }
//         return arr[i]
//     } catch (error) {
//         return error
//     }
// };

// const myArr = [1,2,3,4,5,6];
// const newArr = findElement(myArr, 2)
// console.log(newArr)


const birthdayCakeCandles = (arr) => {
    let maxNum = Math.max(...arr);
    let filter = arr.filter(item => item === maxNum);
    return filter.length
}

let newArr = [2,4,4,1,8];
const candles = birthdayCakeCandles(newArr)
console.log(candles);


