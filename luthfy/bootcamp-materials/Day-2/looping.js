// LOOPING MENGGUNAKAN WHILE LOOP
console.log("==========================");
console.log("WHILE LOOP");
console.log("==========================");
let angka = 1;
while (angka <= 5) {
    console.log("While loop ke - ", angka);
    angka++;
};
console.log("==========================");
console.log("==========================");
console.log(" ");

// CONTOH MENCARI BILANGAN PRIMA MENGGUNAKAN WHILE LOOP
console.log("==========================");
console.log("MENCARI BILANGAN PRIMA");
console.log("==========================");
let n = 20; // Cari bilangan prima 1 - 20
let i = 2; // Inisialisasi bilangan prima terkecil
while (i < n) { // Selama nilai i kurang dari atau sama dengan n, maka dia akan looping sampai kondisi terpenuhi
    let bilanganPrima = true; // Inisialisasi variabel bilangan prima dengan nilai true;
    let j = 2; // Inisialisasi variabel untuk dimasukan ke rumus
    while (j < i) { // Selama nilai j kurang dari i, maka loop berjalan
        if (i % j === 0) { // Jika i bisa dibagi dengan j, maka i bukan bilangan prima
            bilanganPrima = false; // Ubah menjadi nilai false
            break; // Loop selesai
        }
        j++; // Increment atau menambahkan 1 ke nilai j tiap kali loop selesai
    }
    if (bilanganPrima) { // Jika bilanganPrima bernilai true maka i adalah bilangan prima
        console.log(i); // Output nilai i
    }
    i++;
};
console.log("==========================");
console.log("==========================");
console.log(" ");

// FOR LOOP
console.log("==========================");
console.log("FOR LOOP");
console.log("==========================");

for (let i = 0; i < 5; i++) {
    console.log(`for loop ke ${i}`);
}

console.log("==========================");
console.log("==========================");
console.log(" ");

// CONTOH FOR LOOP UNTUK FAKTORIAL
console.log("==========================");
console.log("FAKTORIAL");
console.log("==========================");

const array = [2, 3, 4, 5]; // Membuat array
let result = 1; // Membuat variabel result dengan nilai 1

// buat variabel i dengan nilai 0, selama nilai i kurang dari panjang array
for (let i = 0; i < array.length; i++) {
    result *= array[i] // Kalikan nilai result dengan element array pada index i
}
console.log(result); // Output

console.log("==========================");
console.log("==========================");
console.log(" ");