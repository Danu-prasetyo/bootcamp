const siswa = {
  nama: "Eimi Fukada",
  umur: 25,
  alamat: "Tokyo, Japan",
};

function updateSiswa(newData) {
  // Menggabungkan objek siswa dengan newData menggunakan spread operator
  const updatedSiswa = { ...siswa, ...newData };

  return updatedSiswa;
}

// Contoh pemanggilan fungsi
const newData = {
  nama: "Ayuzawa Misaki",
  alamat: "Osaka, Japan",
};
const updatedData = updateSiswa(newData);
console.log(updatedData);

/* Variabel siswa adalah objek yang sudah ada dengan properti nama, umur, dan alamat.
Fungsi updateSiswa menerima satu parameter newData yang berupa objek dengan properti yang akan diganti pada objek siswa.
Dalam fungsi, objek siswa dan newData digabungkan menggunakan spread operator (...) sehingga properti pada newData akan mengganti nilai properti yang sudah ada pada siswa jika properti tersebut ada di newData.
Objek yang telah diperbarui disimpan dalam variabel updatedSiswa.
Fungsi mengembalikan nilai dari updatedSiswa.
Pada contoh pemanggilan fungsi, objek newData berisi properti nama dan alamat yang akan mengganti nilai pada objek siswa.
Fungsi updateSiswa dipanggil dengan objek newData sebagai argumen.
Hasil objek yang diperbarui disimpan dalam variabel updatedData.
Hasil akhir dicetak menggunakan console.log().
Dalam contoh di atas, properti nama dan alamat pada objek siswa diganti dengan properti baru yang ada dalam objek newData, sedangkan properti umur tetap menggunakan nilai yang ada pada objek siswa karena tidak ada properti umur dalam objek newData.
 */


