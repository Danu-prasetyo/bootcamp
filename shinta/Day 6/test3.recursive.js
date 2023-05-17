// soal:
// [0,1,1,1,1],
// [1,0,1,1,1],
// [1,0,1,1,1],
// [1,1,0,1,1],
// [1,1,1,1,0],
// outputnya temukan 0

const matrix = [
  [0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
];

let foundZero = false;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 0) {
      foundZero = true;
      break;
    }
  }
  if (foundZero) {
    break;
  }
}

if (foundZero) {
  console.log("Angka 0 ditemukan dalam matriks.");
} else {
  console.log("Angka 0 tidak ditemukan dalam matriks.");
}


/* Tentu! Soal di atas meminta Anda untuk mencari keberadaan angka 0 dalam sebuah matriks dua dimensi. Matriks tersebut direpresentasikan sebagai sebuah array yang berisi array-array angka. untuk menemukan apakah terdapat angka 0 di dalam matriks tersebut.

Untuk menemukannya saya menggunakan nested loop (loop di dalam loop) untuk mengiterasi setiap elemen dalam matriks. Pertama, kita menggunakan loop pertama untuk mengiterasi setiap baris dalam matriks, dan di dalamnya, kita menggunakan loop kedua untuk mengiterasi setiap elemen dalam baris tersebut.

Selama iterasi, kita memeriksa apakah nilai elemen saat ini sama dengan 0. Jika kita menemukan angka 0, kita mengubah variabel `foundZero` menjadi `true` dan menggunakan `break` untuk menghentikan loop agar tidak perlu melanjutkan iterasi ke elemen selanjutnya.

Setelah selesai melakukan iterasi, kita memeriksa nilai `foundZero`. Jika `foundZero` bernilai `true`, itu berarti kita menemukan angka 0 dalam matriks. Maka kita menampilkan pesan "Angka 0 ditemukan dalam matriks". Jika `foundZero` masih `false`, itu berarti tidak ada angka 0 dalam matriks, maka kita menampilkan pesan "Angka 0 tidak ditemukan dalam matriks".

Dengan demikian, Anda menggunakan nested loop untuk memeriksa setiap elemen dalam matriks dan menemukan keberadaan angka 0. */