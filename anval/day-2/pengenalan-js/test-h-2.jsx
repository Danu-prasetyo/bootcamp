// let nama = "anval"
// let umur = 19
// let buah = ['anggur', 'pir']
// let orang = {nama: 'hafitan', umur: 18}
// let a = 2
// let b = 1

// console.log(nama)
// console.log(umur)
// console.log(buah[0])
// console.log(orang.nama)
// console.log(a < b)
// console.log(a > b)


// let x = 115;
// let y = 5;
// let z = 10;

// let jumlah = parseInt(x) + parseInt(y)
// let kurang = parseInt(y) - parseInt(z)
// let kali = parseInt(y) * parseInt(z)
// let bagi = parseInt(z) / parseInt(z)
// let JKB = jumlah - kali - bagi
// let modulus = parseInt(z) % parseInt(y)

// console.log(jumlah)
// console.log(kurang)
// console.log(kali)
// console.log(bagi)
// console.log(JKB)
// console.log(modulus)

// swhitch
// let day = 1
// switch (day) {
//     case 1:
//         console.log('su');
//         break;
//     case 2:
//         console.log('mo');
//         break;
//     case 3:
//         console.log('tu');
//         break;
//     case 4:
//         console.log('wed');
//         break;
//     case 5:
//         console.log('th');
//         break;
//     case 6:
//         console.log('fr');
//         break;
//     case 7:
//         console.log('sa');
//         break;
//     default:
//         console.log('invalid input');
//         break;
// }

// let ang = -1
// const ternary = ang >= 1 ? 'positif' : (ang < 0  ? 'negatif' : 'nol')
// console.log(ternary)


// let mtk = 59
// let fisika = 52
// let kimia = 59

// let jumlah = parseInt(mtk) + parseInt(fisika) + parseInt(kimia)
// let rata = parseInt(jumlah) / 3
// if(mtk < 0 || mtk > 100 ||
//     fisika < 0 || fisika > 100 ||
//     kimia < 0 || kimia > 100){
//         console.log("invalid input");
//     }else {
//         if(rata > 80){
//             console.log("Selamat, Anda telah lulus dengan baik")
//         }else if(rata <= 80 && rata >= 60){
//             console.log("Anda lulus")
//         }else if(rata < 60){
//             console.log("anda tidak lulus");
//         }
//     }



// looping 
// for(let i = 1; i <= 50; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// function rata(arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++){
//         sum =+ arr[i]
//     }
//     let rata = sum / arr.length
//     return rata
// }

// const arr = [2, 4, 6, 8, 10]
// const rataArr = rata(arr)
// console.log(rataArr)

// function abjad(huruf) {
//     let hitung = 0
//     for(i = 0; i < huruf.length; i++){
//         if(huruf[i] >= 'A' && huruf[i] <= 'Z'){
//             hitung++
//         }
//     }
//     return hitung
// }

// const az = "haRi INi Hari Senin"
// const hasil = abjad(az)
// console.log(hasil);

// class & object

// class Persegi{
//     constructor(lebar, tinggi){
//         this.lebar = lebar
//         this.tinggi = tinggi
//     }
//     hitung(){
//         return this.lebar * this.tinggi
//     }
// }

// const persegi = new Persegi(5, 5);
// console.log(`luas ${persegi.hitung()}`)


// function filterNama(nama_nama, search){
//     let result = nama_nama.filter(function(nama) {
//         return nama.includes(search)
//     })
//     return result
// }

// let nama_nama = ['anval', 'upi', 'hafitan', 'saadah']
// let search = 'a'
// let result = filterNama(nama_nama, search)
// console.log(result)

// function filterLaptop(laptop, minHarga, maxHarga) {
//     let result = []
//     for(let i = 0; i < laptop.length; i++){
//         if(laptop[i].harga >= minHarga && laptop[i].harga <= maxHarga){
//             result.push(laptop[i])
//         }
//     }
//     return result;
// }

// let laptop = [
//     { id: 1, nama: 'Lenoboy', harga: 15000000 },
//     { id: 2, nama: 'Asu REOG', harga: 50000000 },
//     { id: 3, nama: 'De El', harga: 10000000 },
//     { id: 4, nama: 'MSG', harga: 30000000 },
// ]

// let minHarga = 15000000
// let maxHarga = 30000000

// let result = filterLaptop(laptop, minHarga, maxHarga)
// console.log(result);