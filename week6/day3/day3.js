//Events
// function inform(){
//     alert("I've been clicked")
// }

// function inform2(){
//     alert("I detect mouse over")
// }

// const button = document.getElementById("myBtn")
// console.log(button)
// button.onclick = inform;

// const mouseOverDiv = document.getElementById("mouseOverDiv");
// mouseOverDiv.onmouseover = inform2;

//Class Ex event

// function insertRow(){
//     const table = document.querySelector("table")
//     const trs = document.querySelector("tr").length
//     console.log(document.querySelector("tr"))

//     const newRow = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     td1.innerText = `Row${trs + 1} cell1`;
//     td2.innerText = `Row${trs + 1} cell2`;
//     newRow.append(td1, td2);
//     table.append(newRow);
// }

//Add Event Listener

// let btn = document.getElementById("btn")
// let btn1 = document.getElementById("btn1")

// function RespondClick(e){
//     console.log("Button Clicked")
//     e.target.style.border = "2px dotted yellow";
// }

// function RespondMouseOver(e){
//     console.log(e)
//     e.target.style.backgroundColor = "salmon";
//     console.log("Mouse Over")
// }

// function RespondMouseOut(){
//     console.log("Mouse Out")
// }

// btn.addEventListener("click", RespondClick);
// btn.addEventListener("mouseover", RespondMouseOver);
// btn.addEventListener("mouseout", RespondMouseOut);

// let btn = document.getElementById("btn")
// let div = document.getElementById("div")
// let section = document.getElementById("section")

// btn.addEventListener("click", XRespondClick); 
// div.addEventListener("click", YRespondClick); 
// section.addEventListener("click", ZRespondClick); 

// function XRespondClick(e) { 
//     alert("BTN is Clicked")
//     e.target.style.border = "2px dotted yellow"
//     e.stopPropagation();
// }    

// function YRespondClick(e) { 
//     alert("DIV is Clicked")
//     e.target.style.border = "2px solid blue"
//     e.stopPropagation();
// }    

//  function ZRespondClick(e) { 
//     alert("SECTION is Clicked")
//     e.stopPropagation();
// }


//Forms
// function submitFunc(e){
//     e.preventDefault();
//     console.log(`${e.target.elements[0].value}`)
//     console.log(`${e.target.elements[1].value}`)
// }

// const form = document.forms[0];
// form.addEventListener("submit", submitFunc);

//settinmeout
// function sayHi(name){
//     alert("Hello "+name);
// }

// let id = setTimeout(sayHi, 5000, "Avi")

// const button = document.querySelector("button")
// button.addEventListener("click", function(){clearTimeout(id)})
// console.log(id)


//Class Ex

// const div = document.querySelector("div");
// console.log(div)

// setTimeout(function(){div.style.display = "block"},5000)

// let num = 0;
// let intervalId = setInterval(function(){
//     console.log(num); num++ 
// }, 1000);


//Class Ex
// let num = 10
// let id = setInterval(function(){
//     if(num == 0){
//         clearInterval(id);
//         div.innerText = `Times Up!!!`;
//     }else{
//     div.innerText = `Time left: ${num}`;
//     num--;
//     }
// }, 1000);


//Animation
const child = document.getElementById("child")
let pos = 0;
setInterval(function(){
    if(pos != 400){
    pos++
    child.style.left = pos+"px";
    child.style.top = pos+"px";
    }else{
        clearInterval(id);
    }
},10)


