// Let Var Const

// console.log(a); // undefined
// var a = 10;
// let b = 20;
// // console.log(b);
// const c = 30;
// a = 40;
// b = 50;
// c = 60;
// console.log(a);
// console.log(b);
// console.log(c);

// var ageOfRamesh = 10;


//1. Var is hoisted , let and const are not hoisted
//2. Var is functional scoped and global, let and const are block scoped


function s(){
    var a = 10;
    let b = 20;
}
s();

console.log(a);
console.log(b);

