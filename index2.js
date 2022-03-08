
//ES6 Tutorial

//var -> function
//let -> block
//const -> block - we cant change value middle of the code

function sayHello(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    
    //cant use if we use let - outside the method
    // can use if we use var - outside the method
    //console.log(i)
};

sayHello();


const person = {
nme: 'Muaaz',
walk() {} , 
talk() {} 
};

person.walk();
person.nme = 'Mohideen';

const targetMember = 'target member';
person[targetMember.valueOf] = 'new target member';


//this key word
const persontwo = {
fullname : "muaaz mohideen",
walknew() {
    console.log(this);
}
};

//return reference for above object
persontwo.walknew();

//Assigning walknew method to a reference and print it
const walkvariable = persontwo.walknew;
console.log(walkvariable);

// we can use walknew directly after bind property assign to that object
const walknew = persontwo.walknew.bind(persontwo);
walknew();

//Arrow functions 

//Example one
const Square = function(number){
    return number * number;
}
// replace above function like below
const SquareOne = numberone => numberone * numberone;
console.log(SquareOne(6));

//Example two
const job = [
{id:1,isActive:true},
{id:2,isActive:true},
{id:3,isActive:false}
];

//const activeJobs = job.filter(function(job){ return job.isActive; });
const activeJobs = job.filter(job => job.isActive); // convert to arrow function
// note : Arrow key dont bind this key word

//Map
const colors = ['red,','green','orange','white'];

// const items = colors.map(function(newcolor) {
//     return '<li>' + newcolor + '</li>';
// });

// convert to =>
const items = colors.map(newcolor => '<li>' + newcolor + '</li>');
// use of template literal
const itemsone = colors.map(newcolor =>`<li>${newcolor}}</li>`);
console.log(itemsone);

//object destructring
const address = {
    street:'',
    city:'',
    countr:''
};

//assigning above property to variable - traditional way
const Street = address.street;
const City = address.city;
const Country = address.countr;

// descturing way of assignee
const {STREET , CITY , COUNTRY} = address;
// we can use alias as well
//const {STREET:st} = address;


//Spread
const first = [1,2,3];
const second = [4,5,6];

//const combine = first.concat(second) // to avoid concat issue use spread as following
const combine = [...first, 'a',...second,'b'];
const clone = [...first];


const student = { id:"Mohammed"};
const Instr = {job:"Instructor"};

const combinenew = {...student,...Instr, destination : "Australia"};
console.log(combinenew);


