class Siswa {
  constructor(name, age, gender) {
    this.nama = name
    this.umur = age
    this.jk = gender
  }

  getData() {
    return `Nama: ${this.nama} \nUmur: ${this.umur} \nGender: ${this.jk}`
  }
}

class NomorId extends Siswa {
  constructor(name, age, gender, idSiswa) {
    super(name, age, gender)
    this.id = idSiswa
  }

  getStudentInfo() {
    return `${this.getData()} \nID Siswa: ${this.id}`
  }
}

const siswa1 = new Siswa("Diki Slebew", 18, "Male");
console.log(`Get Data: \n${siswa1.getData()} \n---`);

const newSiswa = new NomorId("Lucinta Noona", 20, "Female", "02111");
console.log(`Get Student Info: \n${newSiswa.getStudentInfo()}`);