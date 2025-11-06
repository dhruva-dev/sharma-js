var age = 32;
var name = "Ratnesh";
var isPresent = true;
var a = undefined;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isPresent);
// console.log(typeof a);

// Object

var person = {
    age: 32,
    name: "Ratnesh",
    isPresent: true,
    address: {
        city: "Prayahraj",
        state: "up"
    }
}

console.log(typeof person);
console.log(person);
console.log(person.age);
console.log(person.name);
console.log(person.address.state);

// Template Literal

var firstName = "Ratnesh";
var secondName = "Singh"; 

// var fullName = firstName + " " + secondName;
var fullName = `${firstName} ${10 + 20 + secondName}`;
console.log(fullName);

console.log('shajs' - 3);