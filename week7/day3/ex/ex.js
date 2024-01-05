
//Exercise 1 : Comparison
// const compareToTen = (num) =>{
//     return new Promise((resolve, reject) => {
//         num <= 10? resolve(num) : reject(num)
//     })
// };

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log('resolve => ',result))
//   .catch(error => console.log('reject => ',error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log('resolve => ',result))
//   .catch(error => console.log('reject => ',error))


//Exercise 2 : Promises
// const success = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("success")
//     }, 4000)
// });
// success.then((result) => {
//     console.log(result)
// });

//Exercise 3 : Resolve & Reject
const res = Promise.resolve(3);
const rej = Promise.reject("Boo!");

res.then((resolve) => {
    console.log(resolve)
}).catch((error) => {
    console.log(error)
});

rej.then((resolve) => {
    console.log(resolve)
}).catch((error) => {
    console.log(error)
});