// dates learnig

let myDateb= new Date();
// console.log(myDateb.toString());
// console.log(myDateb.toISOString());
// console.log(myDateb.toDateString());
// console.log(myDateb.toTimeString());

// console.log(typeof myDateb);

let myCreatedDate = new Date(2005 , 9 , 17);
// console.log(myCreatedDate.toString());

let myCreatedDate1 = new Date(2004 , 6 , 11);
// console.log(myCreatedDate1.toString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // timestamp in seconds


let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay()); 
console.log(newDate.getFullYear());
