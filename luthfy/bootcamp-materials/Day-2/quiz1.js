// QUIZ NOMOR 1
let hari = 1;
switch (hari) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("maaf input tidak valid");
        break;
}

// QUIZ NOMOR 2
let bilangan = -1;
// let jenis = bilangan > 0 ? "Angka " +bilangan+  " adalah bilangan positif" : bilangan < 0 ? "Angka " +bilangan+ " adalah bilangan negatif" : "Angka " +bilangan+ " adalah bilangan nol"; // Menggunakan plus +
let jenis = bilangan > 0 ? "Positif" : bilangan < 0 ? "Negatif" : "Nol"; // Menggunakan backtik `
console.log(`Angka ${bilangan} adalah bilangan ${jenis}`);