// es6 tutorial
//Using classes - to avoid duplicate of code

// const human = {
//     name = 'Muaaz',
// };

class Human {
    constructor(name){
        this.name = name;
    }
    
    walk() {
        console.log("Walk");
    }
}

//create new Human object
// const humoind = new Human('Muaaz');
// humoind.walk;
// humoind.name;

//Inheritance
class Robot extends Human{
    constructor(name,mechanic){
        super(name); // calling super class constructor
        this.mechanic = mechanic;
    }

    action() {
        console.log('Robot action');
    }
}

const voltron = new Robot('Muaaz','Cartoon');

//Modules 
