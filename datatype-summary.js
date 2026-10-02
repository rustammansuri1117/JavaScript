// Primitive
// 7 types of primitive data types in JavaScript

string
number
boolean
null
undefined
symbol
bigint

// Refrence or non-primitive data types
object
array
function 

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol( '1123')
const anotherld = Symbol( '123')

console.log(id == anotherld)


const heroe = ["rustam" , "sanjana" , "riyansh" ,"navya"] // array data type

const heroes = {
    "name" : "rustam",
    "age" : 22,
    "isLoggedIn" : false
} // object data type

const getName = function() {
    return "rustam"
} // function data type