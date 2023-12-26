//Console.log
// console.log("Hello world")

//Javascript Variables
// let x = 2;
// console.log(x);

// let my_name = 'Avi'
// let his_$name = 'Avraham'
// let name1 = 'Bob'

// let a = 2;
// let A = 3;
// console.log(a);
// console.log(A);

// let nameOfUser = 'Avi';

// let x,y;
// x = 5 + 2;
// y = x * 2;
// console.log(y);

// let x = 5+2;
// let y = x*2;

//Data Types
//String

// let a = "Hello";
// let b = "World";
// let c = a + " " + b;

// console.log(a+b);
// console.log(c);

// let shortString = "Hello";
// console.log(shortString.length);

//String Methods

// let str = "Hello Everyone, Please say hello to the class";
// console.log(str);

// let posUpperCaseHello = str.indexOf("Hello");
// console.log(posUpperCaseHello);

// let posLowerCaseHello = str.indexOf("hello");
// console.log(posLowerCaseHello);

// let str = "Hello Everyone, Please say hello to the class";
// console.log(str.substring(0,23))

// let str = "Hello EveRyone, PlEase say heLlo tO the class";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let addressNumber = 2;
// let addressStreet = "Kiryat Malachi Rashi";
// let country = "Israel";

// let globalAddress = "I live in "+ addressStreet +" "+
//  addressNumber +" in "+  country
// console.log(globalAddress)

// let globalAddressButBetter = `I live in ${addressStreet} ${addressNumber}, in ${country}`;
// console.log(globalAddressButBetter);

//Numbers
// let x = 2;
// let y = "2";
// console.log(x + 1);
// console.log(y + 1); //convert the number into a string

// let op = "me";
// let num = "1";
// let numTypeNum = 1;

// console.log(isNaN(op));
// console.log(isNaN(num));
// console.log(isNaN(numTypeNum));
// console.log(isNaN(numTypeNum.toString));

// let op = 10.6789;
// console.log(op.toFixed(2));
// console.log(op.toFixed(1));
// console.log(op.toFixed(0));

//Boolean
//true or false
// console.log(Boolean(10 > 9));
// console.log(Boolean(10 < 9));

//Comparison 
//Declare
// let str = "string"

//Comparing values
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(1 != "1");
// console.log(1 !== "1");

// console.log(1 > 0 && 2 > 1);
// console.log(1 > 0 || 2 < 1);

// let x = 1;

// x = x + 1;
// x++;
// x--;
// x += 10;
// x *= 10;

// console.log(x)

//User Interface Functions
//Alert

// alert("Hello");

// let user1 = "John";
// let user2 = "Bill";
// let user3 = "Nancy";

// let users = ["john", "Bill", "Nancy", "Sam"]
// console.log(users[3])

//NestedArray
// let sampleArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8]
// ]

// console.log(sampleArr);
// console.log(sampleArr[0]);
// console.log(sampleArr[0][1]);

//changing element in array
// let color = ["blue", "yello", "green"]
// console.log(color[0])
// color[0] = "black"
// console.log(color[0])

// console.log(color.length)

//Array Methods
//Push to add element to the end of array
// let colors = ["blue", "yello", "green"];
// console.log(colors);
// colors.push("white");
// colors.push("pink", "black");
// console.log(colors);

//Pop remove the last element of array
// colors.pop()
// console.log(colors);

//Splice (start, how many element to remove, add)
// colors.splice(2, 1);
// colors.splice(1, 0, "red", "black");
// console.log(colors);

//Slice - return a new array, dosent touch original
// can only slice an array
// let sliceArray = colors.slice(1,3);
// console.log(sliceArray)

// let colorstring = colors.toString();
// console.log(colors);
// console.log(colorstring);

// let pets = ["cat", "dog", "fish", "rabbit", "cow"];
// let dogIndex = pets.indexOf("dog");
// console.log(pets[dogIndex]);

// let rabbitIndex = pets.indexOf("rabbit");
// pets.splice(rabbitIndex, 1, "horse");
// console.log(pets);

// console.log(pets.length);


//Objects
//array -> let arr = ["red", "blue", "green"]

//object ->
// let person = {
//     fname:"Avi",
//     lname:"Adgoicho",
//     age: 28,
// }
// console.log(person);
// console.log(person.fname);
// console.log(person.lname);
// console.log(person.age);

// console.log(person["fname"]);

//Edit or add new key value pairs
// person.contry = "Israel";
// person.age = 29;
// console.log(person);

//Delete object
// delete person.fname;
// console.log(person);

// let myObj = {
//     username:"Avi123",
//     password:"1234",
// };

// create an array
// let database = [myObj];

// let newsfeed = [
//     {username:"avi123", timeline: 2020},
//     {username:"avi123", timeline: 2020},
//     {username:"avi123", timeline: 2020}
// ];


//Conditionals
// if (condition){
//     execte this code
// }

// let age = 17;
// if (age > 17){
//     console.log("You can drive")
// }else{
//     console.log("You can not drive")
// }

// let age = 20;
// if (age === 18){
//     console.log("its your birthday")
// }else if (age > 18){
//     console.log("We can go to a pub together")
// }else{
//     console.log("sorry you not allow to go out..")
// }

//Keyless Car
// let age = prompt("What is your age>");
// if (age < 18){
//     alert("Sorry you are to young to drive");
// }else if (age == 18){
//     alert("Congratulation on your first year of driving")
// }else{
//     alert("Powering on , enjoy")
// }

//Switch case
// let fruit = "Papayas"
// switch(fruit){
//     case "Apples":
//         console.log("Apples are $1 a kilo");
//         break;
//     case "Bananas":
//         console.log("Bananas are $2 a kilo");
//         break;
//     case "Papayas":
//     case "Mangoes":
//         console.log("Mangoes and papayas are $2 a kilo")
//         break;
//     default:
//         console.log("Sorry we do not have "+fruit)
// }

//For loop
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// let colors = ["blue", "yellow", "green"];
// for(let i = 0; i < colors.length; i++){
//     console.log(colors[i])
// }

// let person = {
//     fname:"John",
//     lname:"Doe",
//     age:25
// };

// for(let key in person){
//   console.log(person[key])  
// };

// for of loop 

// let colors = ["blue", "yellow", "green"];

// for (let color of colors){
//     console.log(color)
// };

//Continue
// for (let i = 0; i < 10; i++){
//     if (i === 3 || i === 5 || i === 8){
//         continue;
//     }
//     console.log("The position is "+ i);
// };


//Let and const
//Let -> when we need to re-define the variable in the future

// for (let x = 2; x < 30; x++){
//     console.log(x)
// };

// let username;

// do {
//     username = prompt("What is your username?");
// } while (username !== "admin")

// for (let x = 1; x < 5; x++){
//     console.log(x)
//     let fname = "Avi";

//     for (let i = 0; i < 5; i++){
//         console.log(fname)
//     };
// };

