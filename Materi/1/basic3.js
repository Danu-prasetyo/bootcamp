// const object = {
//     nama : "jonathan",
//     umur : 12

// }
// console.log(object.nama)
// console.log(Object.keys(object))
// console.log(Object.value(object))

// const numbers = [1,2,3,4,5]
// numbers.pop()
// const ganjil = numbers.filter(numbers=> numbers % 2 !== 0)
// const numberMap = numbers.map((value,index) => {
//     console.log(value)
//     console.log(index)
// })

// const reduceArray = numbers.reduce((accumulator, currentValue) => accumulator+currentValue)


// console.log(ganjil)
// console.log(reduceArray)

class Parent {
    constructor(childParent){
        this.childParent = childParent

    }
}

class Person extends Parent{
    constructor(childParent,name,age){
        super(childParent)
        this.name = name
        this.age = age
    }
}

class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`HI ${this.name} umurmu ${this.age}. dan ortumu ${this.chilParent}`)

    }
}
// constprintClassParent = new Parent ("Hartono")
// console.log(printClassParent.chilParent)

// const printClass = new Person("Jonathan", 12)

// printClass.sayHello()
console.log(Person.StaticMethod(2,3))