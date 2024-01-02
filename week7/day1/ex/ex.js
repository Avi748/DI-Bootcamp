//Exercise 1 : Location
//Output should be : I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     return `Your full name is ${first} ${last}`
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

//Exercise 3: User & Id
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// const entries = Object.entries(users);
// console.log(entries);

// const newEntries = []
// for(x of entries){
//     const name = x[0]
//     const id = x[1] * 2
//     newEntries.push(name, id)
// };

// console.log(newEntries);

//Exercise 4 : Person Class
//Output should be type object of Person class


//Exercise 5 : Dog Class
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
// };

// const luck = new Dog('luck')
// console.log(luck);

// //option 2 is the currect way to extend from the Dog class
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

// const lab = new Labrador('lab', 'big')
// console.log(lab);


//Exercise 6 : Challenges
//1 Both are false because JavaScript objects are compared by reference not value. 
//So you cannot compare object values like {} === {} something like this will always return false because both {} have different memory addresses.

//2
// const object1 = { number: 5 }; //object1 is an object with the value 5
// const object2 = object1; // object2 is a reference to object1 which is 5
// const object3 = object2; //object3 is a reference to object2 which is reference to object1 which is 5
// const object4 = { number: 5}; // object4 is a new object with the value 5

// object1.number = 4; // since we change the value of object1 to 4 now object2 and object3 also have the value 4 only object4 stay the same with the value 5 becuase it not a reference but a new object
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

//3
class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
};

class Mamal extends Animal{
    constructor(name, color){
        super(name, "Cow", color);
    }

    sound(s){
        return `${s} I'm a ${this.type}, named ${this.name} and I'm ${this.color} and white`
    }
}

const farmerCow = new Mamal("Lily", "brown");
let cowSound = farmerCow.sound("Moooo")
console.log(cowSound)

