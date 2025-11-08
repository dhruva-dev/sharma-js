let heightRam = 170;
let heightShyam = 170;
let heightMahesh = 190;

let ageRam = 14;
let ageShyam = 15;
let ageMahesh = 16;

let scoreOfRam = heightRam + 5*ageRam;
let scoreOfShyam = heightShyam + 5*ageShyam;
let scoreOfMahesh = heightMahesh + 5*ageMahesh;

console.log('Ram score: ' + scoreOfRam);
console.log('Shyam score: ' + scoreOfShyam);
console.log('Mahesh score: ' + scoreOfMahesh);

// if (scoreOfRam > scoreOfShyam) {
//     console.log('Ram wins: ' + scoreOfRam);
// } else if (scoreOfRam === scoreOfShyam) {
//     console.log('Draw');
// } else {
//     console.log('Shyam wins: ' + scoreOfShyam);
// }

if (scoreOfRam > scoreOfShyam && scoreOfRam > scoreOfMahesh) {
    console.log('Ram wins');
} else if (scoreOfShyam > scoreOfMahesh) {
    console.log('Shyam wins');
} else {
    console.log('Mahesh wins');
}