//tipe data dalam java script
//1.Number
1, 2, 3, 4;
//2.string
"hulla netijen in the world", "holla bwabhi";
//3.boolean
true, false;
//4.object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

//5.undefined
//data yang belum diberi nilai

//operator javascript

let nama = "shinta";
console.log(nama);

//array
let array = ["novita", "mutia", "lily"];
console.log(array);
console.log(array[0], array[2]);

let orang = {
  nama: "shinta",
  umur: 21,
  hobi: "masak",
};

let orangKedua = {
  nama: "Dahlia",
  umur: 15,
  hobbi: "membaca",
};

console.log(orangKedua.hobbi);

// dari integer ke pecahan
let angka = "1225234";
console.log(angka);
console.log(parseFloat(angka));

// dari String ke integer
let two = "3.14";
console.log(two);
console.log(parseInt(two));

// to string
let three = "456";
console.log(three);
console.log(toString(three));

//operator aritmetika
let a = 12;
let b = 34;
let c = 25;
let penjumlahan = a + b;
// let JumlahKaliBagi = a + b * c;
let pembagian = b / a;

console.log(penjumlahan);
// console.log(JumlahKaliBagi);
console.log(pembagian);

//equal ==
10 == 10;
// (true) => karna ini untuk perbandingan

// strict equal === untuk pembedaan tipe data
10 === "10";
// (false) => karna 10 yg awal berbeda dengan 10 yang ada tanda string
// not equal
10 != 15;
// (true) => karna 10 tidak sama dengan 15

let x = 115;
let y = 5;
let z = 10;

let Penjumlahan2 = x + y;
console.log("Penjumlahan2 = ", Penjumlahan2);

let Pengurangan = x - z;
console.log("Pengurangan = ", Pengurangan);

let Perkalian = z * y;
console.log("Perkalian = ", Perkalian);

let Pembagian = x / y;
console.log("Pembagian = ", Pembagian);

let Modulus = x % z;
console.log("Modulus = ", Modulus);

let JumlahKaliBagi = (x + y) * z;
console.log("JumlahKaliBagi = ", JumlahKaliBagi);

let Total = (x + y) * z;
console.log("Total = ", Total);

console.log("=====================================");

//object to string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();

const Orang = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
const keys = Orang.toString();

//object value
const Fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = Fruits.valueOf();

/* contoh if else
i <= n;
for(let i = 1; i < 50; i++){
if(i % 3 === 0 && i % 5 === 0){
}else if(i % 3 === 0){
}
console.log("Fizz");
{
} else {
  console.log("buzz")
} 
}

 */

// switch case
let warna = "hijau";
switch (warna) {
  case hitam:
    teks = "warna hitam";
    break;
  case "merah":
    teks = "warna merah";
    break;
  case "hijau":
    teks = "warna hijau";
    break;
  default:
    teks = "warna tidak terdeteksi";
}

// if else
if (true) {
  console.log('hello world');
} else {
  console.log('halo dunia');
}

//if else
const inputKataSandi = "rahasiaaja";

if (inputKataSandi === "rahasia123") {
  console.log("Selamat Anda berhasil login.");
} else {
  console.log("Ops! Kata sandi salah.");
}

// else if
const nilai = 50;

if (nilai <= 100 && nilai >= 80) {
  console.log("Grade: A");
} else if (nilai < 80 && nilai >= 60) {
  console.log("Grade: B");
} else if (nilai < 60 && nilai >= 40) {
  console.log("Grade: C");
} else if (nilai < 40 && nilai >= 20) {
  console.log("Grade: D");
} else if (nilai < 20 && nilai >= 0) {
  console.log("Grade: E");
} else {
  console.log("Nilai tidak valid");
}

const email = "reza@rahasia.com";
const password = "anu";

if (email === "reza@rahasia.com") {
  if (password === "rahasia") {
    console.log("Selamat Anda berhasil login");
  } else {
    console.log("Password salah");
  }
} else {
  console.log("Email belum terdaftar");
}

//string
//
/* function checkBracketsBalance(input){
  let count = 0;
  for (let i = 0; i < input.length, i++){
    if (input[i] === ')'){
    }else if(input[i] === ')'){
      count --;
      if (count < 0)
      return 0;
    }
  }
}
 */
return count === 0 ? 1 : 0;
{
  const input1="(coder)(byte))"
  console.log(checkBracketsBalance(input1)) 

}
const input2="(coder)(byte))"
console.log(checkBracketsBalance(input2))


// cari panjang kata