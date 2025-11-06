// let a = 10;
// let b = 20;

// let c = a;
// a = b; // a = 20
// b = c; // b = 10

// console.log("a is: " + a)
// console.log("b is: " + b)

let a = 10;
let b = 20;

a = a + b; // a => a+b :::  a = 10 + 20
b = a - b; // b => a+b-b => a ::: b = 10 + 20 - 20 = 10
a = a - b; // b => a+b -a => b ::: a = 10 + 20 - 10 = 20

console.log("a is: " + a)
console.log("b is: " + b)

