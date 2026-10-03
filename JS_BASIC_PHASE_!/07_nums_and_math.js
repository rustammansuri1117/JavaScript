const score = 400

const balance = new Number(100)
// console.log(balance) // [Number: 100]

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // 100.00

const otherNumber = 1123.523456789
// console.log(otherNumber.toPrecision(5)) // 123.12
// console.log(otherNumber.toPrecision(3)) // 123.1234568

const a = 100000;
// console.log(a.toLocaleString("en-IN")) // 1,00,000


// ++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.ceil(4.1)) // 5
console.log(Math.max(1, 2, 3, 4, 5)) // 5
console.log(Math.min(1, 2, 3, 4, 5)) // 1
console.log(Math.random()) // random number between 0 and 1
console.log(Math.random() * 10) // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)) // random number between 0 and 9

const min = 10
const max = 20
console.log(Math.floor(Math.random()* 10) + max)