
//Exercise 1 : Giphy API
// fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", {
//     method: "GET"
// })
// .then(res => res.json())
// .then(getAPI => console.log(getAPI))

// //Exercise 2 : Giphy API
// fetch("https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2", {
//     method: "GET"
// })
// .then(res => res.json())
// .then(getAPI => console.log(getAPI))


//Exercise 3 : Async Function
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// const getStarshipData = async () => {
//     try{
//         const resoponse = await fetch('https://www.swapi.tech/api/starships/9/')
//         const data = await resoponse.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// getStarshipData();

//Exercise 4: Analyze
//asyncCall() function calling the resolveAfter2Seconds() function which will be execute after 2 seconds.