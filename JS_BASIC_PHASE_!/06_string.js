const name = "rustam"
const repoCount = 50

// this is previous way of concatenation
// console.log(name + repoCount + "value") // rustam50

// this is new way of concatenation using template literals
//console.log(`this is my ${name} and I have ${repoCount} repo`) // this is my rustam and I have 0 repo


const name1 = new String('Rustam')
// console.log(name1) // [String: 'Rustam']
// console.log(name1[0]) // R

// console.log(name1.__proto__)
// console.log(name1.toUpperCase());
// console.log(name1.charAt(2));
// console.log(name1.indexOf('t'));


// const name2 = "rustam"
// console.log(name2.substring(0, 4)) // rust
// console.log(name2.slice(-2, 4)) // rust

const newStringOne = "   rustam    "
console.log(newStringOne.trim()) // rustam

const URL = "https://www.rustam.com"

console.log(URL.includes("rustam")) // true
