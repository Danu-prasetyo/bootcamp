// const ages = [5, 10, 18, 20, 21, 25, 27, 30];

// function checkAge(age){
//     return age >18;
// }

// console.log(ages.find(checkAge)); //mencetak data yang pertama di cek
// console.log(ages.filter(checkAge)); //mencetak semua data yang di cek

//=========================================================================

// const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
// fruits.fill("Kiwi", 0, 2) //untuk mengganti nilai dalam array
// // angka pertama untuk indeks, yang kedua untuk stop kalo ga ada
// fruits.push("Durian" , "Nangka") // push untuk nambahin data diakhir array
// //fruits.pop() // pop buat ngapus data yang diakhir array
// console.log(fruits);

// fruits.pop() // pop buat ngapus data yang diakhir array trus ngeturn datanya

// let cobaSlice = fruits.slice(1.2) // ngambil data dalam array dan masukin (misahin) dalam array baru
// console.log(cobaSlice); 
// console.log(fruits.sort()); //buat sorting data berdasarkan urutan alpabet
// console.log(fruits.reverse()); //sama buat sorting tapi sebaliknya

//===============================================================================

// const ages = [3, 10, 18 , 20];
// function checkAge(age){
//     return age>18;
// }
// console.log(ages.findIndex(checkAge)); //buat cari indeks dalam suatu array dan mencetak data yang pertama di cetak

//==============================================================================

// const buah = ["apple", "orange", "cherry"];
// let item = buah.forEach(myfunction); //memanggil function untuk nampilin setiap data dalam array
// function myfunction(item){
//     console.log("data : ", item);
// }

//=================================================================================

// const threeDimensionalArray = [//array 1
// [//array 2]
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ],
// [//array 2
// [10,20,30],
// [40,50,60],
// [70,80,90]
// ]
// ];
//akses data dalam array multidimensi
// console.log(threeDimensionalArray[0]); // output [[1,2,3],[[4,5,6],[7,8,9]]
// console.log(threeDimensionalArray[0][1]); // output [4,5,6]
// console.log(threeDimensionalArray[1][2][1]) // output: 6

// ubah nilai pada elemen array multidimensi
// threeDimensionalArray[0][1][2] = 100;
// console.log(threeDimensionalArray[0][1][2]);
// console.log(threeDimensionalArray[0]);

//==================================================================================

const person = {
    nama: "John Doe",
    umur: 30,
    pekerjaan: "Pengembang Web",
    alamat: {
        jalan: "jl. raya no.123",
        kota: "jakarta",
        negara: "Indonesia"
    },
    hobi: ["Olahraga", "Musik", "Membaca"]
};

person.hobi.push("game")
console.log(person);

// let ambilIdentitas = Object.keys(person) //ambil keys didalam objek
// console.log((ambilIdentitas));

// let objectToString = JSON.stringify(person)
// console.log(objectToString);

// let stringToJSON = JSON.parse(`{"nama":"John Doe","umur":30,"pekerjaan":"Pengembang Web"}`)
// JSON.stringify
// console.log(stringToJSON);

//=============================================================================================

// let waktu = new Date() //ngambil waktu realtime
// console.log(waktu);
// console.log(waktu.getDate());
// console.log(waktu.getMonth());
// console.log(waktu.getFullYear());
// console.log(waktu.getHours());

//===========================================================================================

//class dalam javascript

// class orang {
//     constructor(nama, umur){  //ngasih nilai awal ke propwrti objek yang akan dibuat
//         this.nama = nama;
//         this.umur = umur;
//     }

//     getNama(){
//         return this.nama
//     }

//     getUmur(){
//         return this.umur
//     }

//     getAll(){
//         return `Nama: ${this.nama}, Umur: ${this.umur}`
//     }

//     static inputData(nama){
//         return new orang(nama,0)
//     }
// }
// const siswa = new orang("Luthfi",26)
// console.log(siswa.getAll())

//============================

// class car {
//     constructor(brand){
//         this.carname = brand;
//     }
//     presemt(){
//         return `i have a ${this.carname}`;
//     }
// }

// class model extends car {
//     constructor(brand, mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.presemt() + `, it is a` + this.model;
//     }
// }

// myCar = new model("nissan", "GTR");
// console.log(myCar.show());