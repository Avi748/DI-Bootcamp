const lodash = require('lodash');

const add = (num1, num2) => {
    return lodash.add(num1, num2)
}

const multi = (num1, num2) => {
    return lodash.multiply(num1, num2)
} 

module.exports = {add, multi};