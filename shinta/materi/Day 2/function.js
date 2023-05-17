//function biasa
function test() {
  console.log("test");
}
test();

//arrow function
const sapa = (nama, nama2) => {
  console.log(`hai ${nama} ${nama2}`);
  //   sapa("netijen", "in the world!");
};
return sapa("netijen", "in the world!");

//anonFunction
const anonFunction = () => {
  console.log("anon");
};

anonFunction();

//contoh penjumlahan menggunakan function
//bisa menggunakan function dimana pun tanpa membuat function yang baru

function penjumlahan(angka) {
  return angka + 12;
}
let hasil1 = penjumlahan(3);
let hasil2 = penjumlahan(8);
console.log(`hasil penjumlahan =${hasil1}`);
console.log(`hasil penjumlahan =${hasil2}`);

// contoh soal function

function cetakAngka(angka = 1) {
  return angka;
}
let hasil = cetakAngka(3);
console.log(`hasil cetakAngka = ${hasil}`);
console.log("hasil", cetakAngka());

//contoh soal function
function hitungKapital(string) {
  let hitung = 0;
  //

  return hitung;
}

const string1 = "hello world";
const string2 = "Owi Kun";

console.log(hitungKapital(string1));



//contoh function menghitung kapital(UpperCase)
function hitungKapital2(string)
let hitung = 0;
//jawab disini
for(let i = 0; i < string.length; i++){
    if (string[i] === string[i].toUpperCase() && string [i] == "" && string[i] == "!"){
        hitung++
    }
}

// return hitung ;
//   const string1 = "holla!";
// const string2 = "wol";

// console.log(hitungKapital(string1));
// console.log(hitungKapital(string2));


// for(let i = 0; i < str.length; i++){ //huruf kecil(lowerCase)
//     if(string[i]>= "a" && string[i] <= "z"){
//         hitung++
// }
// }
    
//return {[`kapital$ (hitung),kecil $(hitung2)`]
