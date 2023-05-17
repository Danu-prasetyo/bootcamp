class Orang {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    getNama(){
        return this.nama
    }

    getUmur(){
        return this.umur
    }
    getAll(){
        return `Nama : ${this.nama}, Umur: ${this.umur}`
    }

    static inputData(nama){
        return new Orang(nama,20)
    }
}

const siswa = new Orang("Rizki Maulana", 26)
console.log(siswa.getAll())
const guru = Orang.inputData("Danu")
console.log=(guru.getAll())




