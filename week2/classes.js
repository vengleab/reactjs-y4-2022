// var Person = function() {
//     this.hand = 2
    
// }

// // similar to instance variable in OOP
// Person.prototype.leg = 2

// // similar to static variable in OOP
// Person.class = 'Y4S1'

// Person.prototype.move = function () {
//     console.log(`Using ${this.leg} leg(s) to move`);
// }


// Person.prototype.kick = function () {
//     console.log(`Using1 leg to kick`);
// }

class Person {
    static classes = 'Y4S1'

    constructor() {
        this.leg = 2
        this.hand = 2;
    }

    move() {
        console.log(`Using ${this.leg} leg(s) to move`);
    }
    kick() {
        console.log(`Using1 leg to kick`);
    }

    static displayClass() {
        console.log(Person.classes);
    }
}

class Student extends Person {

    constructor(id = 'Unknown') {
        super();
        this.id = id
    }

    showID() {
        console.log(`My ID is: ${this.id}`);
    }

}


const person = new Person()
const person2 = new Person()

// person.move()
// person2.leg = 1
// person2.move();
// person2.kick()

// console.log('Class of person1: ', Person.classes)
// Person.displayClass()

const stu1 = new Student()
stu1.move();
stu1.showID()

const stu2 = new Student(3)
stu2.showID()