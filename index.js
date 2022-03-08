//console.log('hello world');

let name = 'Muaaz';
console.log(name);

let firstName = 'Muaaz';
let lastName = 'Mohideen';

console.log(firstName + lastName);


// to store static value use const , other wise use let
const interestRate = 8.0;
//interestRate = 3;
console.log(interestRate);

let nameq = 'Muaaz'; // String literal
let age = 40; // number
let isApproved = true // boolean logic
let firstNamew = undefined;
//let firstName = null; // to clear the value of variable


let person = {
    myname:'Muaaz',
    myage:30
}


console.log(person.myname)

let selectedColors = ['red','Blue'];
selectedColors[2] = 'Green';
selectedColors[3] = 3;
console.log(selectedColors[2]);

console.log(selectedColors.length);

function Greet(fname,lname){
    console.log('Hello World from Function' + fname + " " + lname);
}

Greet('Muaaz','Cogcom');


// calcualte a value
function square(number) {
   return number * number;
}

console.log(square(4))