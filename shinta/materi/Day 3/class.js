//class dalam javascript
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
    return `nama : ${this.nama} , Umur : ${this.umur}`;
  }
  static inputData(nama) {
    return new Orang(nama, 0);
  }
}
const siswa = new Orang("Owi kun", 50);
console.log(siswa.getAll());

class Car {
    constructor(brand){
        this.carname = brand;      
    }
    present(){
        return 'i have a' + this.carname;
    }
}
// class Model ekstends Car {
//     constructor(brand,mod); 
// super(brand);
// this.model = mod;
// }

    
/*     show();{
        return this.present(); + '. it is a'  + model   
    }
    

mycar = newModal("Ford","Mustang");
console.log(mycar.show())
 */