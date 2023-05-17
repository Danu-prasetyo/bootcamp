function isPalindrome(input) {
  // Menghapus spasi dan mengubah semua huruf menjadi huruf kecil
  const formattedInput = input.replace(/\s/g, "").toLowerCase();

  // Membalikkan string input
  const reversedInput = formattedInput.split("").reverse().join("");

  // Membandingkan input asli dengan input yang sudah dibalik
  if (formattedInput === reversedInput) {
    return true; // Palindrom
  } else {
    return false; // Bukan palindrom
  }
}

// Contoh penggunaan
console.log(isPalindrome("kasur rusak")); // Output: true
console.log(isPalindrome("Scrumble")); // Output: false

/* Fungsi isPalindrome menerima satu parameter input yang akan dicek apakah merupakan sebuah palindrom.
Pertama, spasi dihapus dari input menggunakan regex /\s/g, kemudian semua huruf diubah menjadi huruf kecil menggunakan toLowerCase(). Hal ini dilakukan agar pengecekan tidak sensitif terhadap spasi dan kapitalisasi huruf.
Selanjutnya, string input dipecah menjadi array menggunakan split(''), kemudian di-reverse menggunakan reverse(), dan akhirnya di-join kembali menjadi string menggunakan join('') untuk mendapatkan input yang sudah dibalik.
Terakhir, dilakukan perbandingan antara input asli dengan input yang sudah dibalik. Jika kedua input sama, maka dikembalikan true yang berarti input merupakan palindrom. Jika tidak sama, maka dikembalikan false yang berarti bukan palindrom.
Contoh penggunaan fungsi dengan menggunakan console.log() untuk mencetak hasil pengecekan pada input yang diberikan. */
