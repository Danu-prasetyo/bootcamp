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
    return `ID Siswa: ${this.idSiswa}, ${this.getData()}`;
  }
}

// Contoh penggunaan class Siswa
const siswa1 = new Siswa("Diki Slebew", "25", "Male");
console.log(siswa1.getData());

// Contoh penggunaan class NomorId
const newSiswa = new NomorId("Lucinta Noona", 20, "Female", "12345");
console.log(newSiswa.getStudentInfo());

/* Kelas Siswa adalah parent class dengan properti name, age, dan gender. Konstruktor Siswa digunakan untuk menginisialisasi properti tersebut.
Method getData pada class Siswa digunakan untuk mengembalikan string yang berisi informasi lengkap tentang siswa berdasarkan properti name, age, dan gender.
Kelas NomorId merupakan subclass dari Siswa yang diturunkan menggunakan keyword extends. Properti tambahan idSiswa ditambahkan pada konstruktor NomorId.
Method getStudentInfo pada class NomorId mengembalikan string yang berisi informasi tentang ID siswa (idSiswa) beserta informasi lengkap siswa yang diambil dari method getData dari parent class Siswa.
Contoh penggunaan kelas Siswa dan NomorId dengan membuat objek siswa menggunakan new dan mengakses method yang sesuai. */