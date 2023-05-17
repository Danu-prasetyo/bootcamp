// const ages = [5, 10, 18, 20, 21, 25, 27, 30];

function checkAge(age) {
  return age > 18;
}

console.log(ages.find(checkAge)); //mencetak data yang pertama dicek
console.log(ages.filter(checkAge)); // mencetak  semua data yang dicek

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 1, 2); //untuk mengganti nilai dalam array
//angka pertama untuk indeks, yang kedua untuk stop )
fruits.push("Durian"); //push untuk menambahkan data akhir array
fruits.pop(); //untuk menghapus data yang diakhir ngereturn datanya
console.log((pop = cobaPop));
console.log(); //data setelah di pop
console.log(fruits);

let cobaSlice = fruits.slice(1, 2); // mengambil data dalam array dan memasukkan / memindahkan kedalam array baru
fruits.slice(1, 2);
console.log(cobaSlice);
console.log(fruits.sort()); //buat sorting atau mengurutkan data berdasarkan alpabet
console.log(fruits.reverse()); //kebalikan dari sorting

const ages = [3, 10, 18, 20, 21];
function checkAge(age) {
  return age > 18;
}
console.log(ages.findIndex(checkAge)); // buat nyari indeks dalam suatu array, dan mencetak data yang pertama di cek

const buah = ["apple", "orange", "cherry"];
let item2 = buah.forEach(myFunction); //memanggil function untuk menampilkan setiap data dalam array
function myFunction(buah) {
  console.log(`fruits: $(buah1)`);
}


//array multidimensi dengan tiga dimensi
const threeDimensionalArray = [
  //array 1
  [
    //blok ungu indeks 0 dari data yang pertama
    [1, 2, 3],
    [4, 5, 6], //array 3 blok  biru indeks 1 dari data yang kedua
    [7, 8, 9],
  ],
  [
    //array 2
    [10, 20, 30], //array 3
    [40, 50, 60],
    [70, 80, 90],
  ],
];

//akses data dalam array multidimensi
console.log(threeDimensionalArray[0]);//output: [[1,2,3,4][4,5,6][7,8,9]] 
console.log(threeDimensionalArray[0][1]);
console.log(threeDimensionalArray[0][1][2]);

//ubah nilai pada elemen array multidimensi
threeDimensionalArray[0][1][2] = 100;
console.log(threeDimensionalArray[0][1][2]);//output 100
console.log(threeDimensionalArray[0]); 

