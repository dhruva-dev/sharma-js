const prompt = require('prompt-sync')(); 
let num;
do {
    num = prompt("Enter number between 1 and 10");
} while (num < 1 || num > 10);