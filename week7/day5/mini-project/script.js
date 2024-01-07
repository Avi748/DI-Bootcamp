const container = document.getElementById("container");
const button = document.getElementById("bTn");

async function getInfo(){
  try{
    let randomNumber = Math.floor((Math.random() * 100));
    const url = "https://www.swapi.tech/api/people/"+randomNumber;

    const response = await fetch(url, {
      method:"GET"
    });
    const data = await response.json();
    // console.log(data);
    let personArr = [];
    personArr.push(data.result.properties);
    // console.log(personArr);

    personArr.map((result) => {
        const name = document.createElement("h1");
        name.innerText = `Name: ${result.name}`;
        // console.log(name)
        const height = document.createElement("p");
        height.innerText = `Height: ${result.height}`;
        // console.log(height)
        const gender = document.createElement("p");
        gender.innerText = `Gender: ${result.gender}`;
        // console.log(gender)
        const birthYear = document.createElement("p");
        birthYear.innerText = `Birth year: ${result.birth_year}`;
        // console.log(birthYear)

        const world = document.createElement("p");

        async function getHomeWorldName(){
            const homeworld = await fetch(result.homeworld)
            const worldname = await homeworld.json()
            // console.log(worldname)
            world.innerText = `Home world: ${worldname.result.properties.name}`
            // console.log(world)
        }
        getHomeWorldName()

        container.appendChild(name);
        container.appendChild(height);
        container.appendChild(gender);
        container.appendChild(birthYear);
        container.appendChild(world);
    })

  }catch(error){
    console.log(error);
    const errorMessage = document.createElement("h1")
    errorMessage.innerText = "Oh No That person isn't available."
    container.appendChild(errorMessage)
  }
};

button.addEventListener("click", (e) =>{
    e.preventDefault()
    setTimeout(() => {
        loading()
        setTimeout(() => {
            refresh()
            getInfo()
        },500)
    },1000)
    refresh()
})

function loading(){
    const loadIcon = document.createElement("i")
    loadIcon.classList.add("fa", "fa-spinner", "fa-pulse", "fa-2x", "fa-fw");
    const loadText = document.createElement("p")
    loadText.innerText = "Loading...";
    container.appendChild(loadIcon)
    container.appendChild(loadText)
}

function refresh(){
    let child = container.lastElementChild
    console.log(child)
    while(child) {
      container.removeChild(child);
      child = container.lastElementChild
    }
}
