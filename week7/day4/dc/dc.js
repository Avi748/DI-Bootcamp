const searchGif = document.getElementById("search-gif");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const deleteAllGif = document.getElementById("delete-gif");

let category = "";

async function getRandomGif(){
  try{
    category = searchBox.value;
    const url = `https://api.giphy.com/v1/gifs/random?q&tag=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`;

    const response = await fetch(url, {
      method:"GET"
    });
    const data = await response.json();
    // console.log(data); DEBUG
    let giflist = [];
    giflist.push(data.data.images.downsized.url);
    // console.log(giflist) DEBUG

    giflist.map((result) => {
      const gif = document.createElement("img");
      gif.src = result;

      const deleteGif = document.createElement("button");
      deleteGif.innerText = "Delete Gif"

      deleteGif.addEventListener("click", (e) => {
        searchResult.removeChild(gif);
        searchResult.removeChild(deleteGif);
      })
      // console.log(result) DEBUG
      searchResult.appendChild(gif);
      searchResult.appendChild(deleteGif);

    })
  }catch(error){
    console.log(error);
  }
};

searchGif.addEventListener("submit", (e) => {
  e.preventDefault();
  getRandomGif();
});

deleteAllGif.addEventListener("click", (e) => {
  e.preventDefault();
  let child = searchResult.lastElementChild
  while(child) {
    searchResult.removeChild(child);
    child = searchResult.lastElementChild
  }
});