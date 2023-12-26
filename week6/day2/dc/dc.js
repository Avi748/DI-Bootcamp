const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

for(const planet of planets){
    const div = document.createElement("div")
    div.classList.add("planet")
    div.classList.add(planet)
    const section = document.querySelector(".listPlanets")
    section.appendChild(div)
}

const mercury = document.getElementsByClassName("Mercury")[0].style.backgroundColor = "lightgray";
const venus = document.getElementsByClassName("Venus")[0].style.backgroundColor = "orange";
const earth = document.getElementsByClassName("Earth")[0].style.backgroundColor = "lightblue";
const mars = document.getElementsByClassName("Mars")[0].style.backgroundColor = "navajowhite";
const jupiter = document.getElementsByClassName("Jupiter")[0].style.backgroundColor = "papayawhip";
const saturn = document.getElementsByClassName("Saturn")[0].style.backgroundColor = "palegoldenrod";
const uranus = document.getElementsByClassName("Uranus")[0].style.backgroundColor = "paleturquoise";
const neptune = document.getElementsByClassName("Neptune")[0].style.backgroundColor = "royalblue";
