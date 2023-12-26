//Functions
// function drinkCoffee(){
//     console.log("I drink coffee")
// }

// drinkCoffee();

// function userInfo(userName, userAge){
//     console.log(`My name is ${userName} and my age is ${userAge}`)
// };

// userInfo("Avi", 28)

// function calculate(a,b,c,d){
//     console.log(a + b + c + d)
// };

// calculate(1,2,3,4)

//Default value
// function userInfo(userName, userAge="unKnow"){
//     console.log(`My name is ${userName} and my age is ${userAge}`)
// };

// userInfo("Avi")

//Local variables
// function userMoreInfo (userName, userAge) {
//     let eyeColor = "blue"; //local variable 
//     console.log("My name is " 
//     + userName + ", my age is "  
//     + userAge + ", I have " 
//     + eyeColor + " eyes");
// }
// userMoreInfo("Sarah", 22); //My name is Sarah, my age is 22, I have blue eyes


//Class EX1
// function age(myAge){
//      let myMomAge = myAge * 2
//      let myDadAge = myMomAge * 1.2
//     console.log(myAge, myMomAge, myDadAge)
// }
// let a = Number(prompt("Whats your age?"))
// age(a)


//Return
// function userInfo(userName, userAge) {
//     let result = "My name is " + userName 
//     + ", my age is " + userAge;
//     return result;
// }

// let girlInfo = userInfo("Sarah", 22);
// console.log(girlInfo); //My name is Sarah, my age is 22

// function isDivisable(number , divisable){
//     if (number % divisable === 0){
//         return "The number is even";
//     }else{
//         return "The number is odd"
//     }
// }

// console.log(isDivisable(72,8))

//Class Ex2
// function age(myAge){
//      const myMomAge = myAge * 2
//     return `My Age is ${myAge} and my mom age is ${myMomAge}`
// }
// let a = Number(prompt("Whats your age?"))
// console.log(age(a));


//Exceptions
// try{
// const fruit = "apple";
// throw new ReferenceError("I made up an error")
// console.log("ignore this");
// }catch(e){
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// }finally{
//     console.log("I will run regardless of error");
// }


//Object Methods
// const person = {
//     firstName: "Sarah",
//     eyeColor: "Blue",
//     age:25,
//     calc: function(){
//         console.log(`My mom age is ${this.age * 2}`);
//     }
// };

// person.calc()

//DOM
//quaryselector
// const h1 = document.querySelector("h1")
// console.log(h1)

// const li = document.querySelector(".Header")
// console.log(li)

// const listItem = document.querySelectorAll("li")
// console.log(listItem)

//getElementbyID

// const s = document.getElementById("secondListItem")
// console.log(s)

//adding an element
// const h2 = document.createElement("h2")
// h2.innerText = "This is our first createElement"

// const div = document.querySelector(".container")
// console.log(div)

// div.append(h2);

//Styles
// let ul = document.getElementById("firstList")
// ul.style.backgroundColor = "red";
// ul.style.borderRadius = "14px";

//Matches
// console.log(ul.matches("#firstList"))
// const listItem = document.querySelector("li")
// const secondLi = listItem[1];

// console.log(secondLi.closest('.firstList'))


//Class Ex3
//1
// const div1 = document.getElementById("container");
// const div2 = document.querySelector("#container");
// const div3 = document.querySelector("div");

// const body = document.querySelector("body");
// const div4 = body.firstElementChild;

// console.log(div1);
// console.log(div2);
// console.log(div3);
// console.log(div4);

//2
// const ulNodes = document.querySelectorAll("ul");
// console.log(ulNodes);

//3 the first li of each ul
// console.log(ulNodes[0].children[0]);
// console.log(ulNodes[0].children[1]);

// for (let ul of ulNodes){
//     for (let li of ul.children){
//         console.log(li)
//     }
// }


//Attributes
const div = document.querySelector("div");
console.log(div.hasAttribute("class"))
console.log(div.getAttribute("class"))

div.setAttribute("id", "red");
div.removeAttribute("id");

// img.setAttribute("src", "link")
// div.append(img);
