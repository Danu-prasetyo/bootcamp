// ----- Class -----

// class Orang {
//   constructor(nama, umur) { // Give first value 
//     this.name = nama; // nama is a Params
//     this.age = umur; // umur is a Params
//   }

//   getNama() {
//     return this.name
//   }

//   getUmur() {
//     return this.age
//   }

//   getAll() {
//     return `Nama: ${this.name}, Umur: ${this.age}`
//   }

//   static inputData(nama) {
//     return new Orang(nama, 0) // Give value
//   }
// }

// const siswa = new Orang("Mega Chan", 50)
// // console.log(`Nama: ${siswa.getNama()}`);
// // console.log(`Umur: ${siswa.getUmur()}`);
// // // console.log(siswa.getAll());

// // const guru = Orang.inputData("Danu")
// // console.log(guru.getAll());

// console.log(siswa.getAll());

// class Car { // Parent Class
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     // return 'I have a ' + this.carname;
//     return `I have a ${this.carname}`;
//   }
// }

// class Model extends Car { // Children Class
//   constructor(brand, mod) {
//     super(brand); // Call property and method from parent
//     this.model = mod;
//   }
//   show() {
//     return `${this.present()}, it is a ${this.model}`;
//     // return this.present() + ', it is a ' + this.model;
//   }
// }

// myCar = new Model("Nissan", "GTR");
// console.log(myCar.show());