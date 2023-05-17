// membuat class dengan properti dan metode 
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello my name is ${this.name} and i'm ${this.age} years old`);
    }
}
    // membuat instance dari class
const john = new Person('john', 25);

//mengakses properti dari instance
console.log(john.name);

// memanggil metode dari instance
john.sayHello();


// inheritance
class Developer extends Person {
    constructor(name,age, programmingLanguage){
        super(name,age);
        this.programmingLanguage = programmingLanguage;
    }
    sayHello() {
        console.log(`Hello, i'm a Developer. my Name is ${this.name} and i'm ${this.age} years old.`);
    }
    writeCode() {
        console.log(`I'm writing ${this.programmingLanguage} code.`);
    }
}



const johnDev = new Developer('John', 25, 'Javascript');
johnDev.sayHello();
johnDev.writeCode();

