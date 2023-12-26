//ex1

// function displayNumbersDivisible(){
//     let sum = 0;
//     for(let i = 0; i < 500; i++){
//         if (i % 23 === 0){
//             console.log(`Outcome: ${i}`)
//             sum = sum + i;
//         }
//     }
//     console.log(`Sum : ${sum}`)    
// };

// displayNumbersDivisible();

//ex2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }

// shoppingList = ["banana", "orange", "apple"]

// function myBill(){
//     let bill = 0;
//     if((shoppingList[0] in stock) && (stock.banana > 0)){
//         bill += prices.banana
//     }
//     if((shoppingList[1] in stock) && (stock.orange > 0)){
//         bill += prices.orange
//     }
//     if((shoppingList[2] in stock) && (stock.apple > 0)){
//         bill += prices.apple
//     }
//     return bill;
// }

// console.log(myBill())


//ex3
// function changeEnough(itemPrice, amountOfChange){
//     let sum = 0;
//     let change = [0.25, 0.10, 0.05, 0.01]
//     let new_amount = [];

//     for(let i = 0; i < change.length; i++){
//         new_amount.push(change[i] * amountOfChange[i])
//     }
//     console.log(new_amount)

//     for(let i of new_amount){
//         sum += i;
//     }
//     console.log(sum)
//     if (sum >= itemPrice){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(changeEnough(0.75, [0,0,20,5]))


//ex4
// function hotelCost(){
//     cost = 140;
//     do {
//         answer1 = prompt("How many nights would you like to stay in the hotel?");
//     } while(isNaN(answer1));
//     return answer1 * cost
// };

// function planeRideCost(){
//     const london = 183
//     const paris = 220
//     const all = 300
//     do {
//         answer2 = prompt("What is your destination?");
//     } while(!isNaN(answer2));
//     if (answer2 == "London"){
//         return london
//     }else if (answer2 == "Paris"){
//         return paris
//     }else{
//         return all
//     }
// };

// function rentalCarCost(){
//     carCost = 40;
//     do {
//         answer3 = prompt("How many days would you like to rent the car?");
//     } while(isNaN(answer3));
//     if(answer3 > 10){
//         return answer3 * carCost * 0.95
//     }else{
//         return answer3 * carCost
//     };
// };

// function totalVacationCost(){
//     hotelCost()
//     planeRideCost()
//     rentalCarCost()
//     console.log(`The car cost: ${rentalCarCost()},
//     The Hotel cost: ${hotelCost()},
//     The plane tickets cost: ${planeRideCost()}`);
// };

// totalVacationCost()


//ex5
// const div = document.querySelector("div")
// console.log(div)

// const richard = document.getElementsByTagName("li")[1].textContent = "Richard"
// console.log(richard)


// let sarah = document.getElementsByTagName("li")[3]
// let ul = document.getElementsByClassName("list")[1].removeChild(sarah)

// function change_txt(){
//     let name = document.getElementsByClassName('list');
//     for (let i=0; i < name.length; i++) {
//         name[i].firstElementChild.textContent = "Avi";
//     }
// }
// change_txt()

// let name = document.getElementsByClassName('list');
// for (let i=0; i < name.length; i++) {
//     name[i].classList.add("student_list");
// }
// console.log(name)

// let firstList = document.getElementsByClassName('list')[0].classList.add("university", "attendance")
// console.log(firstList)

// let div = document.getElementById("container")
// div.style.backgroundColor = "lightblue"

// let dan = document.getElementsByTagName("li")[4].style.display = "none"
// console.log(dan)

// let richard = document.getElementsByTagName("li")[1].style.border = "solid 5px black"

// let body = document.querySelector("body").style.fontSize = "30px"


//ex6
// let div = document.getElementById("navBar")
// div.setAttribute("id", "socialNetworkNavigation")
// console.log(div)

// let li = document.createElement("li")
// let textNode = document.createTextNode("Logout")
// li.append(textNode)

// let ul = document.getElementsByTagName("ul")[0]
// ul.appendChild(li)
// console.log(ul)

// console.log(ul.firstElementChild.textContent)
// console.log(ul.lastElementChild.textContent)




