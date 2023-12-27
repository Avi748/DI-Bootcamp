//Exercise 1 : Change The Article

// const h1 = document.querySelector("article").children[0]
// console.log(h1)

// const last = document.querySelector("article")
// last.lastElementChild.remove()

// function click(e){
//     console.log(e)
//     e.target.style.backgroundColor = "red";
// }
// const h2 = document.querySelector("article").children[1]
// h2.addEventListener("click", click)
// console.log(h2)

// function hide(e){
//     console.log(e)
//     e.target.style.display = "none";
// }
// const h3 = document.querySelector("article").children[2]
// h3.addEventListener("click", hide)

// function addButton(){
//     const button = document.createElement("button")
//     button.textContent = "bold";
//     button.addEventListener("click", transformBoldText)
//     const article = document.querySelector("article")
//     article.appendChild(button)
// }

// function transformBoldText(e){
//     const paragraphs = document.querySelectorAll("p")
//     for(const p of paragraphs){
//         p.classList.add("bold")
//     }
// }
// addButton()


//Exercise 2 : Work With Forms

// const form = document.querySelector("form")
// console.log(form)

// const fname = document.getElementById("fname")
// const lname = document.getElementById("lname")
// console.log(fname, lname)

// const firstName = document.getElementsByName("firstname")
// const lastName = document.getElementsByName("lastname")
// console.log(firstName, lastName)


//Exercise 3 : Transform The Sentence

// let allBoldItems;

// function getBoldItems(){
//     allBoldItems = document.getElementsByTagName("strong");
// }

// function highlight(){
//     getBoldItems();
//     for(const bold of allBoldItems){
//         bold.style.color = "blue"
//     }
// }

// function returnItemsToDefault(){
//     getBoldItems();
//     for(const i of allBoldItems){
//         i.style.color = "black"
//     }
// }

// const p = document.querySelector("p")
// p.addEventListener("mouseover", highlight);
// p.addEventListener("mouseout", returnItemsToDefault);


//Exercice 4 : Volume Of A Sphere
// const form = document.getElementById("MyForm");
// const radius = document.getElementById("radius");
// const Volume = document.getElementById("volume");
// form.addEventListener("submit", calculate)

// function calculate(e){
//     e.preventDefault();
//     const r = Number(radius.value);
//     if(Number.isNaN(r)) return;
//     const v = (4 / 3) * Math.PI * r ** 3;
//     Volume.value = v.toFixed(2)
// }


