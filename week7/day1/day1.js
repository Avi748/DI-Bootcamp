
//Class Ex
// let b = 3, d = b, u = b;
// // console.log(b,d,u)

// const tree = ++d * d*b * b++ + 
// + --d+ + +b-- + 
// + +d*b+ +
// u

// console.log(tree)

// //++d * d*b * b++ +
// 4 * 4 * 3 * 3 +
// //+ --d+ + +b-- + 
// 3 + 4 +
// // + +d*b+ +
// 3 * 3 +
// 3


//Advanced Objects

// let obj = {
//     name: 'avi',
//     age:28
// };

// obj.email = 'avi@gmail.com';

// let obj1 = new Object();
// obj1.name = 'john';
// obj1['email'] = 'john@gmail.com';

// console.log(obj);
// console.log(obj1);

// let name = obj.name;
// console.log(name);
// let email = obj['email'];
// console.log(email);


//Dynamic key
// let a = "bnbnbnmb"
// let obj2 = {
//     [a]: 'Marry'
// };

// console.log(obj2[a]);

// let e = 'email';
// let un = 'username'

// let obj3 = {
//     [e]: 'new@gmail.com',
//     [un]: 'newuser'
// };

// console.log(obj3);
// console.log(obj3.email);
// console.log(obj3['email']);
// console.log(obj3[e]);


//Loop
// let obj = {
//     name: 'dan',
//     age:16
// };

// for(x in obj){
//     console.log(x, obj[x])
// };

//Object.keys
// const keys = Object.keys(obj)
// console.log(keys)
// keys.forEach(item => {
//     console.log(item)
// });

// //Object.values
// const values = Object.values(obj)
// console.log(values)
// values.forEach(item => {
//     console.log(item)
// });

// //Object.enteries
// const entries = Object.entries(obj);
// console.log(entries)
// for(x of entries){
//     console.log(x[0], x[1]);
// };


//Object.FromEntries

// let cities = [
//     ['tokyo', 3000000],
//     ['delhi', 7000000],
//     ['tel aviv', 70000]
// ];

// console.log(cities);

// let fromEntries = Object.fromEntries(cities);
// console.log(fromEntries);

// let obj = {
//     name: 'dan',
//     age:16,
//     address: {
//         city: 'Tel Aviv'
//     }
// };

// //clone
// let obj2 = {...obj};
// obj2.name = 'Marry'
// obj2['age'] = 25
// obj2.address.city = 'Paris'

// console.log('obj', obj);
// console.log('obj2', obj2);

// //JSON
// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj)

// let newObj = JSON.parse(jsonObj);
// console.log('newObj', newObj);

// newObj.address.city = 'New York'


//Merging
// let obj = {
//     name: 'dan',
//     age:16,
// };

// let obj2 = {
//     city: 'TLV',
// };

// // obj.city = obj2.city
// let obj3 = {...obj, ...obj2}
// console.log(obj3);


//Destructuring
// let obj = {
//     name: 'dan',
//     age:16,
// };

// const name = obj['name']
// const age = obj.age
// console.log(name, age);

// const {name, age} = obj
// console.log(name, age);

// let arr = ['one', 'two'];
// const [a,b] = arr
// console.log(a,b);


//Spreading
// let obj = {
//     name: 'dan',
//     age:16,
// };

// let obj1 = {...obj, city:'TLV', lname:'cohen'}
// console.log(obj1);


//Nested Object Destructuring
// let obj = {
//     name: 'dan',
//     age:16,
//     address: {
//         city: 'NY',
//         country: 'USA'
//     }
// };

// const {name, age, address:{city, country}} = obj
// console.log(name, age, city, country);

// function fullname(obj){
//     const {name, age} = obj
//     return name +" "+ age
// }
// console.log(fullname(obj));


// const users = {
//     user1: { age:44, name: 'picard'},
//     user2: { age:12, name: 'sisko'},
//     user3: { age:109, name: 'janeway'},
// };

// const usersKeys = Object.keys(users)
// console.log(usersKeys);

// const usersMoreThen30 =  usersKeys.filter(key => users[key].age > 30);

// console.log(usersMoreThen30);

// const result = usersMoreThen30.map(id => ({id:id, ...users[id]}));
// console.log(result);

// const oneLine = Object.keys(users).filter(key => users[key].age > 30).map(id => ({id:id, ...users[id]}));
// console.log(oneLine)


//Object method
// let obj = {
//     name: 'john',
//     getName: function(){
//         return this.name
//     }
// }

// let username = obj.getName()
// console.log(username);


//Class
class Animal {
    constructor(animalName){
        this.name = animalName
    }
    makesound(){
        return `${this.name} make a sound`;
    }
}

const animal1 = new Animal('dog');
let sound = animal1.makesound()
console.log(sound)


class Dog extends Animal{
    constructor(name){
        super("Dog");
        this.mydogname = name;
    }
    bark(){
        return `My ${this.name}, ${this.mydogname} bark`
    }
}

const myDog = new Dog('Tony')
let dogSound = myDog.bark()
console.log(dogSound);