let a = 10;
let b = 'Ratnesh';

let person = {
    age: 32,
    name: 'Ratnesh'
}
         //  0  1  2   3    4   5 
let coins = [2, 5, 3, 20, 10, 100];
console.log(coins[3]);
console.log("No of items in the arrat", coins.length);

// const filterOdd = coins.filter(function(item){
//     return item%2 === 0;
// });

// console.log(filterOdd);

for (let i = 0;i <= coins.length;i=i+1) {
    console.log(coins[i]);
}