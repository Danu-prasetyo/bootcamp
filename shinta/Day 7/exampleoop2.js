class Developer extends Person{
    constructor(name,age,programingLanguage){
        super(name,age);
    }

    sayHello(){
        console.log(`Hello, I'm developer. My name is ${this.name} and I'm a ${this.age} years old`);
    }

    writeCode(){
        console.log(`I'm writing ${this.programingLanguage} code`)
    }
}

const johnDev = new Developer('John',25,'Javascript');
johnDev.sayHello(); // output : 'hello,I'm developer. my name is john and i"m 25 years old'
johnDev.writeCode();// output :'i"m writing javascript code'

