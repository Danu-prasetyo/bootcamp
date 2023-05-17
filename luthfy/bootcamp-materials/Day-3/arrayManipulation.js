// MANIPULASI DATA
// METHOD FIND AND FILTER
const ages = [5, 7, 10, 15, 18, 20, 25, 27, 30];

function checkAge(age) {
    return age > 18;
};

console.log("Find Method: ", ages.find(checkAge)); // Mencetak data yang pertama dicek
console.log(" ");
console.log("Filter Method: ", ages.filter(checkAge)); // Mencetak semua data yang dicek
console.log(" ");
console.log("To Know the length after filtered data: ", ages.filter(checkAge).length); // Mengetahui panjang data setelah dilakukan pengecekan filter
console.log(" ");

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// SORT AND REVERSE METHOD
console.log("Sort data from Asc: ", fruits.sort()); // Mengurutkan data dari huruf atau nilai terkecil sampai terbesar
console.log(" ");
console.log("Sort data from Desc: ", fruits.reverse()); // Mengurutkan data dari huruf atau nilai terbesar sampai terkecil
console.log(" ");

// FILL METHOD
fruits.fill("Lemon", 1, 2); // Method untuk mengganti nilai dalam array, angka 1, 2 itu untuk memperjelas data yang akan diubah pada index ke berapa
console.log("Fill: ", fruits);
console.log(" ");

fruits.fill("Lemon"); // Jika ingin mengganti semua nilai, tidak usah diberi angka 1, 2 karena angka tersebut digunakan sebagai pembatas dari index ke berapa sampai ke berapa data akan diubah
console.log("Fill without index: ", fruits);
console.log(" ");

// PUSH METHOD
fruits.push("Durian", "Nangka") // Method untuk menambahkan data ke dalam array
console.log("Push: ", fruits);
console.log(" ");

// PUSH METHOD
fruits.pop(); // Method untuk menghapus data
console.log("Pop: ", fruits);
console.log(" ");

// SLICE METHOD
fruits.slice(1, 2); // Method untuk mengambil data dalam array dan memisahkannya ke dalam array baru
console.log("Slice: ", fruits);
console.log(" ");

// FIND INDEX METHOD
function ageCheck(age) {
    return age > 18;
}
console.log("To find index from array: ", ages.findIndex(checkAge)); // Method untuk mencari index dalam suatu array, dan mencetak data yang pertama dicek
console.log(" ");

// FOR EACH METHOD

let item = fruits.forEach(myFunction) // Memanggil fungsi untuk menampilkan setiap data dalam array
function myFunction(item) {
    console.log(`Data: ${item}`);
}
console.log(" ");

fruits.forEach(function (fruit) {
    console.log(`Data: ${fruit}`);
})
console.log(" ");

let array = [4, 5, 6, 7, 8];
array.fill("Luthfy", 1, 2);
array.push(9);
console.log("Add data use fill method: ", array);
console.log(" ");

array[1] = 10;
console.log("Add data without use fill method: ", array);
console.log(" ");

// ARRAY MULTIDIMENSI
const threeDimensionalArray = [ // Dimensi pertama / Array 1
    [ // Dimensi kedua / Array 2
        [1, 2, 3], // Dimensi ketiga / Array 3
        [4, 5, 6],
        [7, 8, 9]
    ],
    [ // Array 2
        [10, 11, 12], // Array 3
        [13, 14, 15],
        [16, 17, 18]
    ],
    [ // Array 2
        [19, 20, 21], // Array 3
        [22, 23, 24],
        [25, 26, 27]
    ]
];

// Akses data dalam array multidimensi
console.log("Must be 1 - 9: ", threeDimensionalArray[0]);
console.log(" ");
console.log("Must be 456: ", threeDimensionalArray[0][1]);
console.log(" ");
console.log("Must be 6: ", threeDimensionalArray[0][1][2]);
console.log(" ");
console.log("Must be 789: ", threeDimensionalArray[0][2]);
console.log(" ");

// Ubah nilai pada elemen array multidimensi
threeDimensionalArray[0][1][2] = 100;
console.log("Must be change 6 to 100: ", threeDimensionalArray[0][1][2]);
console.log(" ");

console.log("Must be 1 - 9: ", threeDimensionalArray[0]);
console.log("Must be 10 - 18: ", threeDimensionalArray[1]);
console.log("Must be 19 - 27: ", threeDimensionalArray[2]);
console.log("Must be all data of array: ", threeDimensionalArray);
