function periksaKeseimbanganBracket(str) {
  var stack = [];

  // Loop melalui setiap karakter dalam string
  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Jika karakter adalah bukaan bracket, tambahkan ke stack
    if (char === "(") {
      stack.push(char);
    }

    // Jika karakter adalah penutup bracket
    if (char === ")") {
      // Jika stack kosong atau karakter sebelumnya bukan bukaan bracket, return 0
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return 0;
      } else {
        // Jika karakter sebelumnya adalah bukaan bracket, hapus dari stack
        stack.pop();
      }
    }
  }

  // Jika stack masih berisi bukaan bracket, return 0. Jika tidak, return 1.
  return stack.length === 0 ? 1 : 0;
}

/* Fungsi periksaKeseimbanganBracket menerima parameter str yang merupakan string yang akan diperiksa.
Membuat stack (tumpukan) kosong untuk menyimpan bukaan bracket.
Melakukan loop melalui setiap karakter dalam string menggunakan loop for.
Jika karakter saat ini adalah bukaan bracket (, maka karakter tersebut ditambahkan ke stack.
Jika karakter saat ini adalah penutup bracket ), maka dilakukan pengecekan:
Jika stack kosong atau karakter sebelumnya bukan bukaan bracket (, maka tidak ada pasangan bracket yang sesuai, sehingga mengembalikan nilai 0.
Jika karakter sebelumnya adalah bukaan bracket (, maka menghapus karakter bukaan bracket dari stack.
Setelah loop selesai, dilakukan pengecekan apakah stack masih berisi bukaan bracket yang tidak memiliki pasangan. Jika iya, mengembalikan nilai 0. Jika tidak, mengembalikan nilai 1.
Contoh pemanggilan fungsi menggunakan console.log() untuk menguji beberapa kasus dan menampilkan hasilnya. */
// Contoh pemanggilan fungsi
console.log(periksaKeseimbanganBracket("(coder)(byte))")); // Output: 0
console.log(periksaKeseimbanganBracket("(c(oder)) b(yte)")); // Output: 1
