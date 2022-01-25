const myObject = {
    name: "Zaphod",
    ship: "Heart of Gold"
}

const Mike = {
    firstName: "Mike",
    lastName: "Hill",
    email: "some@gmail.com"
}

// Object Template
class Student { // factory for students // classes are object factories
    constructor(firstName, lastName) { // a method that is setting the value of the key valued pairs as defined
        this.firstName = firstName; // this refers to the object 
        this.lastName = lastName;
    }
    // function inside an object
    graduate() {
        let date = new Date();
        console.log(this.classYear + 2);  // call a function ()
    } 
}

let manny = new Student("Manny", "Muro", 2022); // object from class factory
let chase = new Student("Chase", "Mahan", 2022);

manny.graduate();

console.log(manny, chase)
