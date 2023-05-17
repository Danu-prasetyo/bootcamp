//Materi1

// ----- Object Oriented Programming -----


// --- Membuat Class dengan Properti dan Metode
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
	}
}

// Membuat instance dari class
const diky = new Person('Diky', 18);

// Mengakses properti dari instance
console.log(diky.name);

// Memanggil metode dari instance
diky.sayHello() // Output: Hello, my name is Diky and I'm 18 years old

class Developer extends Person {
	constructor(name, age, programmingLanguage) {
		super(name, age)
		this.programmingLanguage = programmingLanguage
	}

	sayHello() {
		console.log(`Hello, I'm a Developer. My name is ${this.name} and I'm ${this.age} years old`);
	}

	writeCode() {
		console.log(`I'm writing ${this.programmingLanguage} code`);
	}
}

const dikyDev = new Developer('Diky', 18, 'JavaScript');
dikyDev.sayHello() // Output: Hello, I'm a Developer. My name is Diky and I'm 18 years old
dikyDev.writeCode() // Output: I'm writing JavaScript code


//contoh soal
// input panjang track : 10
// input jumlah mobil :2
// input icon mobil : *
// min kecepatan : 1
// max kecepatan : 4
// input icon mobil : &
// min kecepatan : 1
// max kecepatan : 4

