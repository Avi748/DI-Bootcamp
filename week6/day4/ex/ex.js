//Exercise 1 : Scope
//#1
// We get an error because const declares block-scoped local variable which mean we cannot reassign it

//#2
// By runing the function funcThree() 'a' is equale to 0 because the function did'nt modify it
// By runing the function funcTwo() 'a' is equale to 5 because we decalred that in the function
//Same thing we cannot reassign 'a' if we declare it with const

//3
//By runing the function funcFour() we store 'a' in the browser window with the value 'hello'

//4
//By runing the function funcSix() the value of 'a' will be "test", because after we declare 'a' with let we created a new variable with same name as the global variable 'a'
// And by runing the function the function will alert the a variable inside the function first 
//Change to const won't do anything because we creating a new variable with the same name not declaring

//5
//'a' inside the if will be equale to 5 because we declared that and 'a' outside will be 2 because we did'nt change anything
//'a' inside the if and outside are both different variables with the same name but different values, even by changing to const the result will stay the same.


//Exercise 2 : Ternary Operator
// function winBattle(){
//     return true;
// }

// const winBattle = () => true;

// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);


//Exercise 3 : Is It A String ?
// const isString = (checkIsString) => typeof checkIsString == "string";

// console.log(isString('hello'));
// console.log(isString([1, 2, 4, 0]));


//Exercise 4 : Find The Sum
// const sumNum = (x, y) => x + y;
// console.log(sumNum(20,10));


//Exercise 5 : Kg And Grams

// function weightInKilograms(gram){
//     return gram * 1000;
// };
// console.log(weightInKilograms(1));

// const weightInKilograms = function(gram){
//     return gram * 1000;
// };
// console.log(weightInKilograms(2));

//The main difference between a function expression and a function declaration is the function name, 
//which can be omitted in function expressions to create anonymous functions

// const weightInKilograms = (gram) => gram * 1000;
// console.log(weightInKilograms(3));


//Exercise 6 : Fortune Teller
// const body = document.querySelector("body");

// (function display(numberOfChildren, partnerName, geographicLocation, jobTitle){
//     const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`
//     console.log(sentence)
//     const p = document.createElement("p");
//     p.innerText = sentence
//     body.appendChild(p)
// })(2, "Tal", "UK", "Designer");


//Exercise 7 : Welcome
// (function welcome(name){
//     const div = document.createElement("div");
//     div.innerText = name
//     div.style = "display: inline-block; margin: 10px"

//     const image = document.createElement("img");
//     image.src = "https://cdn2.vectorstock.com/i/1000x1000/57/91/profile-avatar-icon-design-template-vector-28515791.jpg";
//     image.style = "height: 40px; width: 30px; float: left;"

//     const nav = document.querySelector("nav");
//     nav.appendChild(div)
//     nav.appendChild(image)

// })("Avi");

