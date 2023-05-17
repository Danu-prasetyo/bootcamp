function sumArray(array) {
  let sum = 0;

  // Loop melalui setiap elemen dalam array luar
  for (let i = 0; i < array.length; i++) {
    // Loop melalui setiap elemen dalam array dalam
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }

  return sum;
}

// Contoh pemanggilan fungsi
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(sumArray(array)); // Output: 45

/* Fungsi sumArray menerima satu parameter array yang berupa array berisi elemen-elemen yang akan dijumlahkan.
Variabel sum diinisialisasi dengan nilai 0 untuk menampung hasil penjumlahan.
Dilakukan loop melalui setiap elemen dalam array luar menggunakan loop for pertama.
Pada setiap iterasi, dilakukan loop melalui setiap elemen dalam array dalam menggunakan loop for kedua.
Setiap elemen dalam array dijumlahkan dengan variabel sum.
Setelah loop selesai, nilai variabel sum yang berisi hasil penjumlahan semua elemen dalam array dikembalikan.
Contoh pemanggilan fungsi menggunakan console.log() untuk menguji array yang diberikan dan menampilkan hasilnya.
Dalam contoh di atas, array yang diberikan memiliki tiga elemen dalam array luar, dan setiap elemen dalam array luar memiliki tiga elemen dalam array dalam. Jadi, total penjumlahan dari seluruh elemen dalam array tersebut adalah 45.
 */