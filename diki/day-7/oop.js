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

// const readLine = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
//   })
  
//   function input(prompt) {
// 	return new Promise((callback, error) => {
// 	  readLine.question(prompt, (uinput) => {
// 		callback(uinput)
// 	  }, () => {
// 		error()
// 	  })
// 	})
//   }
  
//   (async () => {
// 	try {
// 	  const panjangTrack = await input("Input Panjang Track: ")
// 	  const jumlahMobil = await input("Input Jumlah Mobil : ")
  
// 	  const iconMobil = await input(`Input Icon Mobil: `)
// 	  const min = await input(`Min Kecepatan Mobil: `)
// 	  const max = await input(`Max Kecepatan Mobil: `)
  
// 	  const convertMin = parseInt(min)
// 	  const convertMax = parseInt(max)
  
// 	  let mulai = 0
// 	  let maju = '='.repeat(panjangTrack)
	  
// 	  readLine.on('line', () => {
// 		console.log('Clicked');
// 		const random = Math.floor(Math.random() * (convertMax - convertMin + 1)) + convertMin
// 		console.log(mulai);
// 		console.log(random);
// 		mulai = (mulai + random)
// 		console.log(mulai);
// 	  }); 
  
// 	  console.log(`${iconMobil}${'='.repeat(panjangTrack)}`);
  
// 	} catch (error) {
// 	  console.error(error);
// 	}
//   })()

// const readLine = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// function input(prompt) {
// 	return new Promise((resolve) => {
// 		readLine.question(prompt, (uinput) => {
// 			resolve(uinput);
// 		});
// 	});
// }

// (async () => {
// 	try {
// 		const panjangTrack = await input("Input Panjang Track: ");
// 		const iconMobil = await input(`Input Icon Mobil: `);
// 		const min = await input(`Min Kecepatan Mobil: `);
// 		const max = await input(`Max Kecepatan Mobil: `);

// 		const convertMin = parseInt(min);
// 		const convertMax = parseInt(max);

// 		let position = 0;
// 		let track = '='.repeat(panjangTrack);

// 		readLine.on('line', () => {
// 			const random = Math.floor(Math.random() * (convertMax - convertMin + 1)) + convertMin;
// 			position = (position + random) % panjangTrack;
// 			track = track.replace(iconMobil, '=');
// 			track = track.substring(0, position) + iconMobil + track.substring(position + 1);
// 			console.log(track);
// 		});

// 		console.log(`${iconMobil}${track}`);

// 	} catch (error) {
// 		console.error(error);
// 	}
// })();

