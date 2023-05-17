/* Buatlah sebuah class bernama "Rectangle" yang memiliki dua properti: "width" (lebar) dan "height" (tinggi). Class ini juga memiliki dua method:

Method "calculateArea" untuk menghitung luas persegi panjang (rumus: luas = lebar x tinggi).
Method "calculatePerimeter" untuk menghitung keliling persegi panjang (rumus: keliling = 2 x (lebar + tinggi)).
Buatlah objek "rectangle1" dari class "Rectangle" dengan lebar 5 dan tinggi 10. Hitung dan tampilkan luas serta keliling objek tersebut.

Buatlah subclass dari class "Rectangle" bernama "Square" (persegi). Class ini tidak memiliki properti tambahan, namun memiliki implementasi ulang method "calculateArea" dan "calculatePerimeter" yang sesuai dengan rumus persegi (rumus: luas = sisi^2, keliling = 4 x sisi).

Buatlah objek "square1" dari class "Square" dengan sisi 6. Hitung dan tampilkan luas serta keliling objek tersebut.

Dengan menjawab soal di atas, Anda dapat menggambarkan pemahaman Anda tentang pembuatan class, properti, dan method dalam OOP JavaScript. */

// nomor 1
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

/* Class "Rectangle" memiliki dua properti yaitu "width" (lebar) dan "height" (tinggi) yang diinisialisasi melalui constructor.
Method "calculateArea" mengembalikan hasil perkalian "width" dan "height" untuk menghitung luas persegi panjang.
Method "calculatePerimeter" mengembalikan hasil perhitungan keliling persegi panjang menggunakan rumus yang sudah disebutkan.
Dengan menggunakan class "Rectangle" ini, Anda dapat membuat objek persegi panjang dengan menggunakan nilai lebar dan tinggi yang diinginkan, serta melakukan perhitungan luas dan kelilingnya melalui method yang telah didefinisikan. */

// nomor 2
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Memanggil constructor dari superclass dengan menggunakan keyword "super"
  }

  calculateArea() {
    return this.width ** 2; // Menghitung luas persegi dengan menggunakan operator eksponen (pangkat)
  }

  calculatePerimeter() {
    return 4 * this.width; // Menghitung keliling persegi
  }
}

/* Class "Square" merupakan subclass dari class "Rectangle" dengan menggunakan keyword extends.
Constructor dari subclass "Square" menerima satu parameter yaitu "side" (sisi) yang digunakan untuk menginisialisasi properti "width" dan "height" melalui constructor dari superclass ("Rectangle") menggunakan super(side, side).
Method "calculateArea" diimplementasikan ulang untuk menghitung luas persegi dengan memanfaatkan properti "width" dan menggunakan operator eksponen (**) untuk menghitung kuadrat dari sisi.
Method "calculatePerimeter" diimplementasikan ulang untuk menghitung keliling persegi dengan memanfaatkan properti "width" dan mengalikannya dengan 4.
Dengan menggunakan subclass "Square" ini, Anda dapat membuat objek persegi dengan menggunakan nilai sisi yang diinginkan dan melakukan perhitungan luas dan kelilingnya melalui method yang telah diimplementasikan ulang. */

// nomor 3
const square1 = new Square(6);

const luas = square1.calculateArea();
const keliling = square1.calculatePerimeter();

console.log("Luas persegi:", luas);
console.log("Keliling persegi:", keliling);

/* Objek "square1" dibuat menggunakan keyword new dengan menggunakan constructor dari class "Square" dan nilai sisi sebesar 6.
Variabel "luas" diinisialisasi dengan hasil pemanggilan method "calculateArea()" pada objek "square1".
Variabel "keliling" diinisialisasi dengan hasil pemanggilan method "calculatePerimeter()" pada objek "square1".
Hasil perhitungan luas dan keliling kemudian ditampilkan menggunakan console.log().
Dengan menjalankan kode di atas, kita akan mendapatkan output berupa nilai luas dan keliling dari objek "square1" dengan sisi 6. */

// kesimpulan
/* Class: Class adalah sebuah blueprint atau cetak biru yang digunakan untuk membuat objek dengan properti dan method yang serupa. Class menyediakan kerangka dasar yang mendefinisikan karakteristik objek yang akan dibuat. Dalam JavaScript, class didefinisikan menggunakan keyword class.

Properti: Properti adalah variabel yang digunakan untuk menyimpan data atau informasi pada objek. Properti dideklarasikan di dalam class dan setiap objek yang dibuat dari class tersebut akan memiliki salinan properti tersebut. Properti dapat diinisialisasi dalam constructor class atau langsung diberikan nilai.

Method: Method adalah fungsi yang terkait dengan objek atau class. Method digunakan untuk melakukan tindakan atau operasi tertentu pada objek atau untuk mengakses dan memanipulasi data properti. Method didefinisikan di dalam class dan dapat diakses melalui objek yang dibuat dari class tersebut.
Dalam contoh yang telah diberikan sebelumnya, kita membuat class "Rectangle" dan subclass "Square". Class "Rectangle" memiliki properti "width" dan "height" serta method "calculateArea" dan "calculatePerimeter". Subclass "Square" mewarisi properti dan method dari class "Rectangle", namun juga memiliki implementasi ulang method "calculateArea" dan "calculatePerimeter" yang sesuai dengan rumus persegi.

Dengan menggunakan objek yang dibuat dari class-class tersebut, kita dapat mengakses properti dan method yang ada. Dalam contoh terakhir, kita membuat objek "square1" dari class "Square" dengan sisi 6. Kemudian, kita menghitung luas dan kelilingnya menggunakan method "calculateArea" dan "calculatePerimeter" yang telah diimplementasikan ulang pada subclass "Square".

Pemahaman tersebut mencakup konsep dasar OOP JavaScript seperti class, properti, dan method. Selain itu, juga mencakup konsep inheritance (pewarisan) antara class-parent dan class-child (subclass), di mana subclass dapat mewarisi properti dan method dari superclass serta mengimplementasikan ulang method sesuai dengan kebutuhan subclass tersebut.*/