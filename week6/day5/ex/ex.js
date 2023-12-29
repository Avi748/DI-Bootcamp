//ex1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // colors.forEach((color, index) => {
// //     console.log(index, color)
// // });

// let violet = colors.some((color) => {
//     return color === 'Violet'? console.log("Yeah") : console.log("No...");
// });


//ex2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.reduce((acc, current, index) => {
//     console.log(`${ordinal[index]} choice is ${current}`)
//     return [...acc, current, ordinal[index]]
//  }, []);


//ex3
//Output result = to array ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

//Output = ['U', 'S', 'A'], spread syntax (...) allows for iterables to be spread into smaller bits, String can be spread into individual characters


//ex4
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];

// const welcomeStudents = users.map((user) => "Hello " + user.firstName);

// const fullStackResidents = users.filter((user) => user.role === "Full Stack Resident");

// const fullStackResidentsLastName = users.filter((user) => user.role === "Full Stack Resident").map((user) => user.lastName);

// console.log(welcomeStudents);
// console.log(fullStackResidents);
// console.log(fullStackResidentsLastName);


//ex5
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let combine = epic.reduce((acc, val) => {
//     return acc +" "+ val
// });
// console.log(combine);


//ex6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}
];

const studentsThatPassed = students.filter((student) => student.isPassed === true);
console.log(studentsThatPassed);

const congratulateTheStudents = students.filter((student) => student.isPassed === true).forEach(student => {
    console.log(`Good job ${student.name}, you passed the course `);
});
console.log(congratulateTheStudents);
        