// IF ELSE STATEMENT
/*logical statement ini bisa digunakan jika memiliki 3 kondisi saja, jika lebih disarankan 
menggunakan Switch Case*/

console.log("==========================");
console.log("IF ELSE STATEMENT");
console.log("==========================");
let a = 100
if (a > 70) {
    console.log("nilai a lebih besar dari 70");
} else {
    console.log("nilai a lebih kecil dari 70");
};

if (a == 100) {
    console.log("nilainya 100");
};

let classStatus = "close";
let minuteRemain = 5;
if (classStatus == "open") {
    console.log("Kelas bootcamp sedang berjalan");
} else if (minuteRemain) {
    console.log("Kelas bootcamp tersisa 5 menit lagi");
} else {
    console.log("Kelas bootcamp telah berakhir");
};

let grade = 83;
if (grade >= 70) {
    if (grade >= 90) {
        console.log("Nilai A");
    } else {
        console.log("Nilai B");
    }
} else {
    console.log("Nilai C");
};
console.log("==========================");
console.log("==========================");
console.log(" ");

// SWITCH CASE STATEMENT
/*Jika semua kemungkinan telah dieksekusi dan tidak ada yang sesuai maka akan menampilkan
nilai default, oleh karena itu diwajibkan ketika membuat switch case ada defaultnya*/
console.log("==========================");
console.log("SWITCH CASE STATEMENT");
console.log("==========================");
let tombol = 1;
switch (tombol) {
    case 1:
        console.log("Turn on");
        break;
    case 2:
        console.log("Turn off");
        break;
    case 3:
        console.log("Menu setting");
        break;
    default:
        console.log("Do nothing");
        break;
};
console.log("==========================");
console.log("==========================");
console.log(" ");