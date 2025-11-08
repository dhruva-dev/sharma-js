const prompt = require('prompt-sync')(); 
const x = prompt('Enter dollars'); // 1
const y = prompt('Enter cents'); // 50
const z = prompt('Enter no of muffins to buy'); // 5

const total = x*z + (y*z)/100;
const totalDollars = x*z + Math.floor((y*z)/100);
const totalCents = (y*z)%100;

console.log(`Total cost of ${z} muffins is $${totalDollars} and ${totalCents}cents (${total})`);