// Membuat class dengan properti dan method
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`);
    }
}

// Membuat instance dari class
const john = new Person("John", 25)

// Mengakses properti dari instance
console.log(john.name);

// Memanggil method dari instance
john.sayHello();

console.log("============================================");

// Inheritance
class Developer extends Person {
    constructor(name, age, programmingLanguage) {
        super(name, age);
        this.programmingLaguange = programmingLanguage;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`);
    }

    writeCode() {
        console.log(`I'm writing ${this.programmingLaguange} code`);
    }
}

const johnDev = new Developer("John", 25, "Javascript")
johnDev.sayHello();
johnDev.writeCode();