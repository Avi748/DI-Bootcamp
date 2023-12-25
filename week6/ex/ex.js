//ex1
// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// people.splice(0,1);
// console.log(people);

// people.splice(3,1,"Jason");
// console.log(people);

// people.push("Avi");
// console.log(people);

// let maryIndex = people.indexOf("Mary");
// console.log(people[maryIndex]);

// let sliceArray = people.slice(2,4);
// console.log(sliceArray);

// let fooIndex = people.indexOf("Foo");
// console.log(fooIndex); // return -1 because the "Foo" dose'nt exist in the people list so indexOf return -1

// let last = people[people.length -1]
// console.log(last);

//Part II 
// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// };

// for (let person of people){
//     if(person === "Devon"){ break; }
//     console.log(person)
// };

//ex2
// let colors = ["Blue", "Red", "White", "Black", "Green"];
// for(i = 0; i < colors.length; i++){
//     console.log(`My #${i+1} choice is ${colors[i]}`)
// }

//ex3
// let intNum = 0
// while(intNum != 10){
//     let number = prompt("enter a number")
//     intNum = Number(number)
// }
// console.log(intNum)

//ex4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);

// console.log(`The number of appartments in the first floor is ${building.numberOfAptByFloor.firstFloor}`);
// console.log(`The number of appartments in the third floor is ${building.numberOfAptByFloor.thirdFloor}`);

// console.log(`second tenant is ${building.nameOfTenants[1]}`);
// console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment`);

// let davidRent = building.numberOfRoomsAndRent.david[1];
// console.log(davidRent);

// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// console.log(sarahRent);

// let danRent = building.numberOfRoomsAndRent.dan[1];
// console.log(danRent);

// sRent = davidRent + sarahRent
// console.log(sRent);

// if(sRent > danRent){
//     danRent = 1200
// }
// console.log(danRent);


//ex5
// let family = {
//     dad:"Dan",
//     mom:"Sarah",
//     son:"David",
// };

// for(let key in family){
//     console.log(key)
//     console.log(family[key])  
// };


//ex6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }

// let sentence = ""
// for(const key in details){
//     sentence = sentence + " " + key + " " + details[key]
// }
// console.log(sentence);


//ex7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sentence = ""

for (const name of names.sort()){
    sentence = sentence + name[0]
}
console.log(sentence)