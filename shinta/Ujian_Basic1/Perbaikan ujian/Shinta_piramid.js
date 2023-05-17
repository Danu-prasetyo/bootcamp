function createPyramid(height) {
  let pyramid = "";

  for (let i = 1; i <= height; i++) {
    // Menambahkan spasi di depan setiap baris
    for (let j = 1; j <= height - i; j++) {
      pyramid += " ";
    }

    // Menambahkan asterisk (*) ke piramida
    for (let k = 1; k <= 2 * i - 1; k++) {
      pyramid += "*";
    }

    // Pindah ke baris baru setelah satu baris selesai
    pyramid += "\n";
  }

  return pyramid;
}

const height = 7;
const pyramid = createPyramid(height);
console.log(pyramid);

/* Fungsi createPyramid menerima parameter height yang merupakan tinggi segitiga.
Variabel pyramid digunakan untuk menyimpan pola piramida yang akan dibuat.
Dilakukan looping dari baris pertama hingga tinggi segitiga yang diinputkan.
Pada setiap baris, spasi ditambahkan di depan berdasarkan posisi baris.
Asterisk (*) ditambahkan ke piramida sesuai dengan pola yang dibutuhkan.
Setelah satu baris selesai, dilakukan pemindahan ke baris baru dengan karakter \n.
Setelah selesai, nilai pyramid yang berisi pola piramida dikembalikan.
Contoh penggunaan dengan mengatur height menjadi 7 dan mencetak hasilnya dengan console.log. */
