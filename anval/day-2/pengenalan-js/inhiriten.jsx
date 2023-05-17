class Parent{
    constructor(childParent){
        this.cP = childParent
    }
}

class Person extends Parent{
    constructor(cP, name, age){
        super(cP)
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hi ${this.name} umurmu ${this.age}, dan ortumu ${this.cP}`)
    }

    static staticMethod(param1, param2){
        return param1 + param2
    }
}

// const printClassParent = new Parent("Hartono")
// console.log(printClassParent.cP);
const printClass = new Person("Hartono", "upi", 19)
printClass.sayHello()
console.log(Person.staticMethod(2, 3));