import { personArr } from "./data.js";

const cal = () => {
    let sum = 0
    let avg = 0
    personArr.forEach((person) => {
        sum += person.age
        avg = sum / personArr.length
    })
    console.log(`The sum of all ages is: ${sum}, the average is: ${avg}`)
}

cal();