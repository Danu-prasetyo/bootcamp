// CLASS
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    getNama() {
        return this.nama;
    }

    getUmur() {
        return this.umur;
    }

    getAll() {
        return `Nama: ${this.nama}, Umur: ${this.umur}`
    }

    static inputData(nama) {
        return new Orang(nama, 60)
    }
}

const siswa = new Orang("Owi Kun", 50);
console.log(siswa.getAll());
const guru = Orang.inputData("Mega Chan")
console.log(guru.getAll());

// CLASS EXTENDS
// PARENT CLASS
class Car { 
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
};

// CHILDREN CLASS
class Model extends Car { // Extends untuk mewarisi sifat PARENT CLASS
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ' it is a ' + this.model
    }
};

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());