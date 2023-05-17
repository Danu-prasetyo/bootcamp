// switch case
let hari = 3;
switch (hari) {
  case 1: {
    console.log("Sunday");
    break;
  }
  case 2: {
    console.log("Monday");
    break;
  }
  case 3: {
    console.log("Tuesday");
    break;
  }
  case 4: {
    console.log("Wendsday");
    break;
  }
  case 5: {
    console.log("Thursday");
    break;
  }
  case 6: {
    console.log("Friday");
    break;
  }
  case 7: {
    console.log("Saturday");
    break;
  }
  default: {
    console.log("Input tidak valid");
  }
}

// let x = 50;
// let nilai =  x < 100 ? benar : salah

let x = 10;
let nilai = x > 0 ? "bilangan positif" : x < 0 ? "bilangan negatif" : "bilangan nol";
console.log(nilai);

/* cara menggabungkan string dengan angka
/ let angka = 5
 let jenis = angka > 0 "positif" : angka < 0 ? "negatif" : "nol";
  console.log(`Angka ${angka} adalah bilangan ${jenis}`);  
  backtik digunakan untuk menggabungkan string dengan variabel menggunakan ${}
 console.log("angka"+ angka+ "adalah bilangan"+ jenis)
  opsi lain menggabungkan string dengan variabel
 */

let fisika = 80;
let kimia = 90;
let matematika = 85;
let hasil = (fisika + kimia + matematika) / 3;

// rata-rata=198.3

// if (fisika == 80 && matematika == 85 && kimia == 90) {
//   console.log("Valid");
//   if ( fisika <= 80 && matematika <= 85 && kimia <= 90)
// } else {
//   console.log(" Tidak valid && Nilai tidak valid");
// }

// if (hasil >= 80 || hasil <= 100) {
//   console.log("Selamat,Anda lulus dengan baik!");
// } else if (hasil >= 60) {
//   console.log("Selamat Anda lulus!");
// } else {
//   console.log("Anda tidak lulus");
// }

//nested if
let nilaiMatematika = 80;
let nilaiFisika = 90;
let nilaiKimia = 70;
let rataRata = (nilaiMatematika + nilaiFisika + nilaiKimia) / 3;

if (
  "nilaiMatematika >= 0 && nilaiMatematika <= 100 && nilai Fisika) >= 0 nilaiFisika => 100 && nilaiKimia >= 0 && nilaiKimia <= 100"
)
  if (rataRata >= 80) {
    console.log("selamat,anda lulus dengan baik");
  }
if (rataRata >= 60) {
  console.log("anda lulus!");
} else {
  console.log("anda tidak lulus!");
}
