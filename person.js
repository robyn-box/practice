class Person {
    

    constructor(fn, ln, age, email) {
        this.fn = fn;
        this.ln = ln;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.fn} ${this.ln} ${this.age} ${this.email}`;
    }
    currentAge() {
        return `${this.#age}`;
    }
 
}

let person = new Person('Anna', 'Simpson', 22, `anna@yahoo.com`);

console.log(person.toString());
// Anna Simpson (age: 22, email: anna@yahoo.com)

console.log(person.currentAge());