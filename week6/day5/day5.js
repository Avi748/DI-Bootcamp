// const myArray = [2,3,4,5,6];
// const colors = ["red", "blue", "green", "purple"]

// myArray.forEach((number, theIndex) => {
//     console.log(theIndex, number)
// });

// colors.forEach((color, theIndex) => {
//     console.log(theIndex, color)
// });

//Class ex
// const numbers = [10,11,12,15,20];

// numbers.forEach((number) => {
//     if(number % 2 == 0){
//         console.log(number)
//     }
// });


//Some will return true if at least one element match the condition
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let someReturn = myArr.some((number) => {
//     console.log(number)
//     return number === 5;
// })
// console.log(someReturn);


//Class Ex2
// const words = ["wow","hey","bye"];
// let someReturn = words.some((word) => {
//     // if(word.charAt(0) === 'h'){
//     //     console.log(word)
//     // }
//     console.log(word)
//     return word.charAt(0) === 'h';
// })
// console.log(someReturn)


//Every
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let returnEvery = myArr.every((number) => {
//     return number > 1
// });
// console.log(returnEvery);


// const words = ["hello","hey","hola"];
// let returnEvery = words.every((word) => {
//     console.log(word)
//     return word.charAt(0) === 'h'
// });
// console.log(returnEvery);


//Map
// const firstArr = [1, 4, 9, 16];

// const newArr = firstArr.map((number) => {
//     return number.toString();
// })
// console.log(firstArr)
// console.log(newArr)


// const myArr = [10, 20, 30, 40];

// const newArr = myArr.map((number, i) => {
//     return {
//         value: number,
//         index: i
//     }
// });
// console.log(newArr)


//Filter
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const newArr = words.filter((word) => {
//     return word.length > 6;
// })
// console.log(newArr)


//Reduce
// const arr = [1, 4, 9,16];

// let sum = arr.reduce((acc, val) => {
//     console.log(`accumilator: ${acc}`)
//     console.log(`value: ${val}`)
//     return acc + val
// });
// console.log(sum)


//class Ex
// let party = [
//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
//   ]

// let sum = party.reduce((acc, val) => {
//     return val.desert != 'Apple Pie'? acc + val.calories : acc
// }, 0);
// console.log(sum)

// let sum = party.reduce((acc,val) => {
//     if(val.desert === 'Apple Pie'){
//         return acc;
//     }else{
//         return acc + val.calories;
//     }
// }, 0)

// console.log(sum)
