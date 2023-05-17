// -----Soal No. 1-----

// let day = 5

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//     console.log("Saturday");
//     break;

//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Input Tidak Valid");
//     break;
// }

// let day = "Sunday"

// switch (day) {
//   case "Monday":
//     console.log("Hari ke 1");
//     break;

//   case "Tuesday":
//     console.log("Hari ke 2");
//     break;

//   case "Wednesday":
//     console.log("Hari ke 3");
//     break;

//   case "Thursday":
//     console.log("Hari ke 4");
//     break;

//   case "Friday":
//     console.log("Hari ke 5");
//     break;

//   case "Saturday":
//     console.log("Hari ke 6");
//     break;

//   case "Sunday":
//     console.log("Hari ke 7");
//     break;

//   default:
//     console.log("Input Tidak Valid");
//     break;
// }

// -----Soal No. 2-----

// let a = 0
// let result = a > 0 ? `Angka ${a} adalah bilangan positif` : a < 0 ? `Angka ${a} adalah Bilangan Negatif` : "Angka adalah bilangan Nol"
// console.log(result);

// let a = 10
// let result = a > 0 ? "adalah bilangan positif" : a < 0 ? "adalah Bilangan Negatif" : "adalah Bilangan Nol"
// console.log("Angka", a, result);

// ---Answer

// let angka = 4
// let jenis = angka > 0 ? "Positif" : angka < 0 ? "Negatif" : "Nol"
// console.log(`Angka ${angka} adalah bilangan ${jenis}`);

// -----Soal No. 3-----

// let mat = 100
// let fis = 50
// let kim = 70 

// if (mat <= 100 && mat >= 0) {
//   if (fis <= 100 && fis >= 0 ) {
//     if (kim <= 100 && kim >= 0) {

//       sum = (mat + fis + kim)/3
//       parse = parseInt(sum)
//       console.log(`Rata-Rata : ${parse}`);

//       if (sum >= 80) {
//         console.log("Selamat, Anda Lulus dengan Baik!");
//       } else if (sum < 80 && sum >= 60) {
//         console.log("Anda Lulus");
//       } else {
//         console.log("Anda Tidak Lulus");
//       }

//     } else {
//       console.log("Nilai tidak Valid");
//     }
//   } else {
//     console.log("Nilai tidak Valid");
//   }
// } else {
//   console.log("Nilai tidak Valid");
// }

// let mat = 100
// let fis = 100
// let kim = 100
// let sum = (mat + fis + kim) / 3

// if (mat <= 100 && mat >= 0 && fis <= 100 && fis >= 0 && kim <= 100 && kim >= 0) { 
//   parse = parseInt(sum)
//   console.log(`Rata-Rata : ${parse}`);

//   if (sum >= 80) {
//     console.log("Selamat, Anda Lulus dengan Baik!");
//   } else if (sum < 80 && sum >= 60) {
//     console.log("Anda Lulus");
//   } else {
//     console.log("Anda Tidak Lulus");
//   }
// } else {
//   console.log("Nilai tidak Valid");
// }

// -----Soal No. 5-----

// let n = 50
// for (i = 1; i <= n; i++) {
//   let bilanganGanjil = true
//   let bilangan = i
//   if (bilangan % 2 === 0) {
//     bilanganGanjil = false
//   }
//   if (bilanganGanjil) {
//     console.log(i);
//   }
// }

// -----Soal No. 6-----

// function hitungRataRata(arr) {
//   let result = 0
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
//     sum = result/arr.length
//   }
//   return sum
// }

// const arr = [2, 4, 6, 8, 10]
// const rataRataArr = hitungRataRata(arr)
// console.log(`Rata Rata dari ${arr} adalah ${rataRataArr}`);

// -----Soal No. 7-----

// function hitungKapital(string) {
//   let hitung = 0
//   let kapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//   for (i = 0; i < string.length; i++) {
//     for (j = 0; j < kapital.length; j++) {
//       if (string[i] == kapital[j]){
//         hitung++
//       }
//     }
//   }

//   return hitung
// }

// const string1 = "HAlo DuNiA!"
// const string2 = "DikY ARiF FebrIyaNtO"
// console.log(`Jumlah Kapital dari ${string1} adalah ${hitungKapital(string1)}`);
// console.log(`Jumlah Kapital dari ${string2} adalah ${hitungKapital(string2)}`);

// -----Answer-----

// function readString(string) {
//   let uppercase = 0
//   let lowercase = 0

//   for (i = 0; i < string.length; i++) {
//     if (string[i] >= "A" && string[i] <= "Z") {
//       uppercase++
//     }
//   }

//   for (i = 0; i < string.length; i++) {
//     if (string[i] >= "a" && string[i] <= "z") {
//       lowercase++
//     }
//   }
  
//   return ([`Upercase : ${uppercase}, Lowercase : ${lowercase}`])
// }

// const string1 = "Hello World"
// console.log(`String : ${string1}`);
// console.log(readString(string1).toString());