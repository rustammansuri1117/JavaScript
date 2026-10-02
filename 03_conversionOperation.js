 let score = "rustam"; // string type

 console.log(score);
 console.log(typeof score);

 const ScoreInNumber = Number(score); // convert string to number

console.log(typeof ScoreInNumber); // check the type of ScoreInNumber
console.log(ScoreInNumber); // check the value of ScoreInNumber

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1 
let boolenIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean

console.log(typeof boolenIsLoggedIn); // check the type of boolenIsLoggedIn
console.log(boolenIsLoggedIn); // check the value of boolenIsLoggedIn