// // Primitive
// // 7 types of primitive data types in JavaScript

// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// // Refrence or non-primitive data types
// object
// array
// function 

// const isLoggedIn = false  // boolean data type
// const outsideTemp = null  // null data type
// let userEmail;  // undefined data type
// const id = Symbol( '1123')  // symbol data type
// const anotherld = Symbol( '123')  // symbol data type

// console.log(id == anotherld)


// const heroe = ["rustam" , "sanjana" , "riyansh" ,"navya"] // array data type

// const heroes = {
//     "name" : "rustam",
//     "age" : 22,
//     "isLoggedIn" : false
// } // object data type
    
// const getName = function() {
//     return "rustam"
// } // function data type


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap memory in JavaScript

// Stack memory is used for storing primitive data types and function calls.
//  It is a simple and fast memory allocation method.
//  When a variable is declared, it is stored in the stack memory. 
// The stack memory has a limited size, and when it is full, it can lead to a stack overflow error.

// Heap memory is used for storing non-primitive data types, such as objects and arrays.
//  It is a more complex memory allocation method, and it can be slower than stack memory. 
// When an object or array is created, it is stored in the heap memory. 
// The heap memory has a larger size than the stack memory, and it can grow and shrink dynamically as needed.   