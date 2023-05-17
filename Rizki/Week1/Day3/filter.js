//Find & Filters
const ages = [5,10,18,19,20,22,34,50];

function checkAge(age){
    return age > 18;
}

console.log(ages.find(checkAge))
console.log(ages.filter(checkAge))
console.log(ages.filter(checkAge).length)

//Fill
const fruits = ["Banana","Orange","Apple","Mango"]; 

fruits.fill("Kiwi",1,2); //untuk mengganti nilai dalam array
//angka pertama untuk indeks, angka kedua untuk sampai mana data mau di ganti

fruits.push("Durian","Nangka") //push untuk nambahin data di akhiran array

fruits.pop("Durian") //pop untuk menghapus data yang diakhir array
console.log(fruits)

let = cobaSlice = fruits.slice(1,2) //ngambil data dalam array dan masukin(misahin) ke dalam array baru
cobaPop = fruits.pop() //ngambil data akhir array trs mereturn datanya

console.log(cobaPop)
console.log(fruits)
console.log(cobaSlice)
console.log(fruits.sort()) //buat sorting data berdasarkan urutan alphabet (Ascending)
console.log(fruits.reverse()) //sama buat sorting tapi sebaliknya (Descending)

const agess = [3,10,18,20];
function checkAge(age) {
    return age > 18;
}
console.log(agess.findIndex(checkAge)) //buat nyari index dalam satu array, dan mencetak data yang pertama di cek

const buah = ["apple", "orange", "cherry"];
let item = buah.forEach(myFunction); //memanggil function  untuk nampilin setiap data
function myFunction(item) {
    console.log("data :", item);
}

const buah1 = ["apple", "orange", "cherry"];
let item2 = buah1.forEach(myFunction); //memanggil function  untuk nampilin setiap data
function myFunction(buah1) {
    console.log(`fruits : ${buah1}`);
}

