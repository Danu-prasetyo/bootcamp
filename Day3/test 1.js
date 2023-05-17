//soal 1
//buatlah class persegi dengan properti lebar dan tinggi lalu buat method untuk menghitung luas persegi tersebut, lebar =5, tinggi=5

// class persegi{
//     constructor(x,y){
//         this.panjang = x
//         this.lebar = y
//     }
//     luas(){
//         let luas = this.panjang * this.lebar
//             return luas
//         }
//     }
// hitung = new persegi(5,5)
// console.log(hitung.luas());

//====================================================================
//soal 2
//buatlah fungsi dengan nama "filterNama" yang menerima dua paramater, yaitu array nama orang dan parameter, yaitu array nama orang dan paramater "cari".
//fumgsi ini akan mencari nama orangmengandung string didalam paramater "cari", fungsi akan mengembalikan array kosong.
//cost nama = ["danu", "dini", "rizky", "rifky", "riki", "rizieq", "ridwan"];

// function filterNama(array, cari) {
//     let hasil = array.filter(array => array.includes(cari))

//     if (hasil.length == 0) {
//         return "Not Found"
//     }

//     return hasil
// }

// const nama = ["danu", "dini", "rizky", "rifky", "riky", "rizieq", "ridwan"]
// console.log(filterNama(nama, "danu"));

//====================================================================
//soal 3
//buatlah sebuah fungsi dengan nama "filterlaptop" yang menerima tiga parameter, yaitu array laptop, minimal harga, dan maksimal harga
//(laptop,minHarga,maxHarga).Fungsi ini akan mencari laptop yang memiliki harga diantara minimal harga dan maksimal harga, lalu mengembalikan
//nilai array baru yang hanya berisi laptop-laptop tersebut. 
const laptop = [
    { id: 1, nama: "Lenoboy", harga : 1},
    { id: 2, nama: "Asu REOG", harga : 2},
    { id: 3, nama: "de el", harga : 3},
    { id: 4, nama: "MSG", harga : 4}
]
function filterlaptop(laptop, minHarga = null, maxHarga = null) {
    let data = []
    let no = 0
    laptop.forEach(element => {
        if (element.harga >= minHarga && element.harga <= maxHarga ) {
            data[no++] = "nama: " + element.nama + " harga:" + element.harga
        }
    })
    if (data.length == 0) {
        return "data Not Found"
    }

    return(data);
    
}

console.log(filterlaptop(laptop))