// function getX(){
//     console.log('get x =>');
//     setTimeout(() => {
//     return 5;
//     },1)
// }

// function getY(){
//     console.log('get y =>');
//     return 6;
// }

// function getXY(){
//     console.log('get xy =>');
//     let x = getX();
//     let y = getY();
//     console.log(x + y);
// }

// getXY();

//Callback function
// function doSomthing(f){
//     //... get data from the server

//     f()
// }

// function myCallback(){
//     console.log('Callback execute!!!');
// }

// doSomthing(myCallback)

// function fetchDataFromServer(Callback){
//     setTimeout(() => {
//         const data = 'Data from server'
//         Callback(data)
//     },2000)
// }

// function processData(data){
//     console.log('Received: '+data);
// }

// fetchDataFromServer(processData);

// function getX(Callback){
//     setTimeout(() => {
//         Callback(5)
//     }, 2000)
// };

// function getY(Callback){
//     Callback(6)
// };

// function getXY(){
//     getX(function(x){
//         getY(function(y){
//             console.log(x + y);
//         })
//     })
// }

// getXY();

//Promises
/** Promises
 * - Pedding
 * -- resolve - fulfiled
 * -- rejact - fulfiled
 */

/**
 * new Promise((resolve, reject) => {})
 */

// const p = new Promise((resolve, reject) => {
//     resolve(10)
// })

// console.log(p);

// const flip = () =>{
//     const coin = Math.floor(Math.random() * 3);
//     return coin < 2 ? (coin === 0 ? 'Head' : 'Tail') : 'Side';
// };

// const flipCoin = new Promise((res, rej) => {
//     setTimeout(() => {
//         const flipResult = flip();
//         if(flipResult === 'Head' || flipResult === 'Tail'){
//             res(flipResult)
//         }else{
//             rej(flipResult)
//         }
//     }, 2000)
// });

// // console.log(flipCoin);
// flipCoin.then((result) => {
//     // console.log('resolve => ',result);
//     return JSON.stringify(result);
// }).then((result) =>{
//     console.log(result)
// }).catch((error) => {
//     console.log('reject => ',error)
// })

const getX = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(5)
        }, 2000)
    })
}

const getY = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(6)
        }, 3000)
    })
}

const getXY = () => {
    getX()
    .then((resultX) => {
    getY()
    .then((resultY) => {
        return resultX + resultY;
        })
        .then((sum) => {
            console.log(sum);
        })
        .catch((error) => {
            console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
    })
};

// getXY();


//Class ex

const getDataFromServer = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const arr = [
                {username:"aaa", email:'aaa@gmail.com'},
                {username:"bbb", email:'bbb@gmail.com'},
                {username:"ccc", email:'ccc@gmail.com'},
            ]
            res(JSON.stringify(arr))
        }, 2000);
    })
}

getDataFromServer()
.then(res => {
    console.log(res);
    return JSON.parse(res)
})
.then(data => {
    console.log(data);
})