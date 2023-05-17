/** class*/ 
// class siswa{
//    //dekalar parameter
//    constructor(name, age, gender){ 
//         this.name = name,
//         this.age = age,
//         this.gender = gender
//     }
//     // membalikan nilai
//     getData(){
//         return `Nama: ${this.name}, umur: ${this.age}, jenis kelamin: ${this.gender}` 
//     }
// }

// // mewarisi class parent ke children class
// class NomorId extends siswa{
//     constructor(name, age, gender, idSiswa){
//         super(name, age, gender) //mengambil parametr yang di miliki oleh class siswa
//         this.idSiswa = idSiswa
//     }
//     getStudentInfo(){
//         return `Id Siswa: ${this.idSiswa}, ${this.getData()}` //menggunakan method class siswa
//     }
// }

    
// const siswa1 = new siswa('upi', 17, 'female')  //inisialisasi siswa 1 dan membuat class siswa deengen parameter nama, umur, jk
// console.log(siswa1.getData());

// const newSiswa = new NomorId('hafitan', 19, 'male', '12345') ////inisialisasi siswa 1 dan membuat class siswa deengen parameter nama, umur, jk, id-siswa
// console.log(newSiswa.getStudentInfo());

/**array multidimensi */
// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// function sumArray(sum) { // membuat func sum array
//     let count = 0; //inisialisasi count dengan nilai 0
//     for (let i = 0; i < sum.length; i++) { //melakukan looping sesuai dengan panjang dari semua array 
//         for (let j = 0; j < sum[i].length; j++) { //melakukan perulangan berdasarkan jumlah index yang dilooping
//             count += sum[i][j]; //perjumlahan dari setiap array yang di looping
//         }
//     }
//     return 'hasil: ' + count; //hailnya
// }

// console.log(sumArray(array));

/**objek manipulasi */
// const siswa = {
//     name: 'upi',
//     age: 17,
//     address: 'garut'
// }

// function updateSiswa(newData) {
//     // Membuat salinan objek siswa dengan menggunakan spread operator(menggabungkan elemen-elemen)
//     const updatedSiswa = { ...siswa };

//     // Memperbarui properti objek siswa dengan nilai baru dari newData
//     if (newData.name) {
//         updatedSiswa.name = newData.name;
//     }

//     if (newData.age) {
//         updatedSiswa.age = newData.age;
//     }

//     if (newData.address) {
//         updatedSiswa.address = newData.address;
//     }

//     // Mengembalikan objek siswa yang sudah diperbarui
//     return updatedSiswa;
// }

// // Contoh pemanggilan fungsi updateSiswa
// const newData = {
//     name: 'ilda',
//     age: 18
// };

// // mengupdate data siswa
// const updatedSiswa = updateSiswa(newData);
// // menampilkan siswa baru
// console.log(updatedSiswa);

/**if nasted */
// input data
// let jumlah = 1;
// let smartphone = "sumsang";
// let harga = 550000;
// let total = harga * jumlah;
// let hargaDiskon = null;
// let setelahDiskon = null;

// if (total > 0) { //melakukan pengecekan jika total lebih dari 0
//     if (total >= 1000000) { //jika total lebih dari 1000000 maka mendapatakn diskon 10%
//         hargaDiskon = total * 10 / 100;
//         setelahDiskon = total - hargaDiskon;
//         console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone`);
//         console.log(`Selamat! Anda mendapatkan diskon sebesar 10%. Harga setelah diskon adalah ${setelahDiskon}`);
//     } else if (total >= 500000) {
//         hargaDiskon = total * 5 / 100;
//         setelahDiskon = total - hargaDiskon;
//         console.log(`Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone`);
//         console.log(`Selamat! Anda mendapatkan diskon sebesar 5%. Harga setelah diskon adalah ${setelahDiskon}`);
//     } else if (total < 500000) {
//         console.log(`Maaf anda tidak mendapatkan diskon, harga total adalah ${total}`);
//     }
// } else {
//     console.log("Maaf total tidak valid");
// }

/**palindrome */
// function palindromeCheck(word) {
//     console.log("Pengecekan Palindrome");
//     console.log("---");
//     console.log("Kata yang anda masukan:", word);
//     console.log("---");
//     for (let i = 0; i < word.length / 2; i++) { //perulangan berdasarkan panjang kata
//         if (word[i] !== word[word.length - 1 - i]) { // pengecekah huruf sampai tengah dari panjang kata
//             return "Kata yang anda masukan bukan Palindrome" //tidak sesuai keluar
//         }
//     }
//     return "Kata yang anda masukan adalah Palindrome" //sesuai keluar
// }

// console.log(palindromeCheck("anval"));