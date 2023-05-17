let n = 50;
let i = 1;

for (let i = 1; i < 50; i++) {
  if (i % 2 !== 0) {
    console.log(i + "adalah bilangan ganjil");
  }
}

function hitungrataRata(Arr) {// arr : parameter
  let total = 0;
  for (let i = 0; i < Arr.length; i++) { //arr.length : panjang datanya
    total += Arr[i];
  }
  return total / Arr.length;
}
const Arr = [2, 4, 6, 8, 10];
const rataRataArr = hitungrataRata(Arr);
console.log("nilai rata-ratanya adalah " + rataRataArr);

//soal buatlah sebuah program yang menghitung jumlah huruf kapital pada string menggunakan function

// const huruf = 'DataKAPIl';

// function hitungKapital(){
//   let hitung = 0;
//   for()

// return hitung;
// }

// const bigLettersCount = (str) => {
//   let result = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
//       result += 1;
//     }
//   }
//   return result;
// };

// console.log(bigLettersCount("Enter some words."));

/* Kode tersebut adalah sebuah function JavaScript yang digunakan untuk menghitung jumlah huruf kapital yang terdapat dalam sebuah string.

Function tersebut memiliki nama hitungKapital dan menerima satu parameter yaitu str, yang merupakan string yang akan dicek jumlah huruf kapitalnya.

Pada awalnya, function tersebut menginisialisasi variabel count dengan nilai nol dan kemudian melakukan pengulangan for pada setiap karakter dalam string str.

Pada setiap iterasi, function tersebut memeriksa apakah karakter tersebut merupakan huruf kapital dengan membandingkan kode Unicode-nya dengan kode untuk huruf 'A' dan 'Z'. Jika karakter tersebut merupakan huruf kapital, maka variabel count akan ditambahkan satu.

Setelah semua karakter dalam string str telah diperiksa, function tersebut akan mengembalikan nilai count yang merupakan jumlah huruf kapital dalam string tersebut.

Contoh penggunaannya adalah dengan memanggil function hitungKapital dengan sebuah string dan menyimpan hasilnya dalam sebuah variabel. Hasil tersebut dapat dicetak dengan menggunakan string interpolation. */

function hitungKapital(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {//kondisional
      //perbandingan pengecekan pada karakter huruf kapital
      count++; // untuk melooping data
    }
  }
  return count;
}

// Example usage:
const str = "HellO, World!";
const capitalCount = hitungKapital(str); //capitalcount untuk memanggil function
console.log("Count", capitalCount);


