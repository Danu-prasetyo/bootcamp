//soal 5

class data {
    constructor(nama, umur, address){ 
        this.nama = nama;
        this.umur = umur;
        this.address = address;
    }

    getNama(){
        return this.nama
    }

    getUmur(){
        return this.umur
    }

    getAddress(){
        return this.address
    }

    getAll(){
        return `Nama: ${this.nama}, Umur: ${this.umur}, Address: ${this.address}`
    }

    static inputData(data){
        return new data (nama,umur,address)
    }
}
const siswa = new data("Eimi Fukada",25,"Tokyo Japan")
console.log(siswa.getAll())
