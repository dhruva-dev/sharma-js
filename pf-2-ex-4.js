const prompt = require('prompt-sync')(); 
let principal = Number(prompt("Enter pricipal amount"));
let rateOfInterest = Number(prompt("Enter rate of interset"));
let total = principal;
let year;
for (year = 1;total < principal*2 ;year = year + 1) {
    let si = (principal*rateOfInterest)/100;
    total = total + si;
    console.log(total);
}

console.log("No of years needed to double the principal is: " + year);