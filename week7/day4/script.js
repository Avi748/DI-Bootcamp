/** Async / await ES8 */

// function simpleAsync(){
//     return new Promise((res, rej) => {
//         res(1)
//     })
// }

// simpleAsync()
// .then(result => {
//     console.log(result)
// })
// .catch(error => {
//     console.log(error);
// })

/** async function return promise */
// async function asyncFunction(){
//     return 10
//     // throw new Error('aaaa')
// }

// const arrowAsyncFunction = async () => {};

// asyncFunction()
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

// async function getResult(){
//     try{
//         let res = await asyncFunction();
//         console.log(res);
//     }catch (error){
//         console.log(error);
//     }
// }

// getResult();

//Class ex
// const getX = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(5)
//         }, 2000)
//     })
// }

// const getY = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(6)
//         }, 3000)
//     })
// }

// const getXY = () => {
//     getX()
//     .then((resultX) => {
//     getY()
//     .then((resultY) => {
//         return resultX + resultY;
//         })
//         .then((sum) => {
//             console.log(sum);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// };

// const getXY2 = async () => {
//     try{
//         let x = await getX();
//         let y = await getY();
//         let sum = x + y
//         console.log(sum)
//     }catch(error){
//         console.log(error)
//     }
// }

// getXY2();


/** Async / Await in Loops
 * WARNING : async / await dosent play nicely with foreach() loops
 * 
 */

// const timeout = async(milliseconds, id) => {
//     await new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(id, "Done!");
//             res();
//         }, milliseconds);
//     });
// };

// async function x() {
//     console.log("before");
//     for(item of ['first', 'second', 'third']){
//         await timeout(2000, item)
//     }
//     console.log("after")
// };

// x();


/** Fetch */
// fetch(url, {})

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => {
//     return res.json()
// })
// .then(data => {
//     render(data)
// })

// const handleClick = () => {
//     const value = document.getElementById("userid").value;
//     console.log(value)
//     getData(value)
// }

// const getData = async (id) => {
//     try{
//         const resoponse = await fetch('https://jsonplaceholder.typicode.com/users?id='+ id) //Get one user /users?id=4
//         const data = await resoponse.json()
//         render(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// getData();

// const render = (arr) => {
//     const html = arr.map((item) => {
//         return `<div style="display:inline-block;
//         padding:20px;
//         margin:20px;
//         text-align:center;
//         background-color: lightgreen;
//         border:1px solid #000;"
//         >
//         <img src = https://robohash.org/${item.id}?size=150x150 />
//         <h2>${item.name}</h2>
//         <h4>${item.username}</h4>
//         <p>${item.email}</p>
//         </div>`
//     })
//     document.getElementById("add").innerHTML = html.join("")
// }

// const post = {
//     title: 'bla bla bla title',
//     body: 'asdsadk sadkk dsald',
//     userId: 4
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "content-type":"application/json",
//     },
//     body: JSON.stringify(post)
// })
// .then(res => res.json())
// .then(newpost => console.log(newpost))


const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    postAUser(name, email, username);
}

const postAUser = async (name, email, username) => {
    try{
        const options = {
            method: "POST",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(name, username, email)
            }
        
        const resoponse = await fetch("https://users-18kl.onrender.com/usersjson",options);
        const data = await resoponse.json()
        render(data)
    }catch(error){
        console.log(error);
    }
}