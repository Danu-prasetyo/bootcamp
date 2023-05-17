// object oriented programming
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`hello,my name is ${this.name} and I'm ${this.age} years old`);
  }
}

// membuat instace dari class
const John = new Person("john", 25);

// mengakses properti dari instace
console.log(John.name); // output : 'john'

// memangil metode instace
john.sayHello(); // output : 'hello,my name is John and I'm 25 years old'
