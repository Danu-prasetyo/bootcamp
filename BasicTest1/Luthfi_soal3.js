//soal 3

class Siswa {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    getData() {
      return `Nama: ${this.name}, Umur: ${this.age}, Jenis Kelamin: ${this.gender}`;
    }
  }
 
class NomorId extends Siswa {
    constructor(name, age, gender, idSiswa) {
      super(name, age, gender);
      this.idSiswa = idSiswa;
    }
  
    getStudentInfo() {
      return `ID Siswa: ${this.idSiswa}`;
    }
  }

const siswa1 = new Siswa("Diki Slebew", 25, "Male");
console.log(siswa1.getData()); 

const siswa2 = new NomorId("Lucinta noona", 20, "Female", "12345");
console.log(siswa2.getData()); 
console.log(siswa2.getStudentInfo()); 