class Person {
    
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} 
        (age: ${this.age}, email: ${this.email})`;
    }
    static getPeople() {
        return [newPerson('Anna', 'Simpson', 22, 'anna@yahoo.com')];
        return [newPerson('Kingsland')];
        return [newPerson('Stephan', 'Johnson', 25)];
        return [newPerson(`Gabriel`, 'Peterson', 24, `g.p@email.com`)]

    }
 
}

console.log(person.toString());

