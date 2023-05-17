class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hi ${this.name} umurmu ${this.age}`);
    }

    sayGoodBye(){
        console.log(`Hi ${this.name} goodbye`);
    }
}

const printClass = new Person("upi", 19)

printClass.sayGoodBye()