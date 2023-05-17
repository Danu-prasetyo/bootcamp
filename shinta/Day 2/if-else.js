// If else statements
let a = 100;
if (a > 70) {
  console.log("a lebih besar dari 100");
} else {
  console.log("a lebih kecil dari 100");
}
//bila false maka tidak akan muncul

if (a == 100) {
  console.log("nilainya 100");
}

let classStatus = "close";
let minuteRemain = 5;
if (classStatus == "open") {
  console.log("Kelas bootcamp sedang berjalan");
} else if (minuteRemain) {
  console.log("Kelas bootcamp tersisa 5 menit lagi ");
} else {
  console.log("kelas bootcamp telah berakhir");
}

let grade = 83;
if (grade >= 70) {
  if (grade >= 90) {
    console.log("nilai A");
  } else console.log("nilai B");
} else {
  console.log("nilai C");
}
