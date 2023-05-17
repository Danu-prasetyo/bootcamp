// NOMOR 1
for (let i = 1; i < 50; i++) {
    if (i % 2 != 0) {
        console.log(`Bilangan ganjil: ${i}`);
        console.log("========================");
    }
};

// NOMOR 2
function hitungRataRata(array) {
    let nilai = null;
    for (let i = 0; i < array.length; i++) {
        nilai += array[i]
    }
    let nilaiRataRata = nilai / array.length;
    return "Nilai rata-rata dari array adalah: " + nilaiRataRata
};

const arr = [2, 4, 6, 8, 10];
const rataRata = hitungRataRata(arr);
console.log(rataRata);

// NOMOR 3
function hitungKapital(string) {
    let hitung = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= "A" && string[i] <= "Z") {
            hitung++;
        }
    }
    return "Banyaknya huruf kapital pada " + string + " adalah " + hitung;
}

function countTipeAlphabet(string) {
    let countUpperCase = 0;
    let countLowerCase = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= "A" && string[i] <= "Z") {
            countUpperCase++;
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= "a" && string[i] <= "z") {
            countLowerCase++;
        }
    }
    return (["Banyaknya huruf kapital pada " + string + " adalah " + countUpperCase, "Banyaknya huruf kecil pada " + string + " adalah " + countLowerCase]);
}

const string1 = "Hi MAniEzzZ"
const string2 = "Owi Kun"
console.log(hitungKapital(string1));
console.log(countTipeAlphabet(string1));

// let kalimat = "Ibu Pergi Ke Pasar"
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }