//class constructor
class Orang{
    constructor(nama,umur){
        this.nama= nama;
        this.umur= umur;
    
    }
    getNama(){
    return this.nama
    }
    getUmur(){
        return this.umur
    }
    getAll(){
        return `Nama : ${this.nama}, Umur : ${this.umur} `
    }
    static inputData (nama){
        return new Orang(nama,25)
    }
}
const siswa = new Orang("joni",50)
console.log(siswa.getAll());
const guru = Orang.inputData("danu")
console.log(guru.getAll());


//class extends
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show()