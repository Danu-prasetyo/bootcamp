// OBJECT
const person = {
    nama: "John Doe",
    umur: 20,
    pekerjaan: "Web Developer",
    alamat: {
        jalan: "Jl. Raya No. 123",
        kota: "Jakarta",
        negara: "Indonesia",
    },
    hobi: ["Olahraga", "Musik", "Membaca"],
};

console.log(person.alamat.kota);
console.log(person["alamat"]["kota"]);
console.log(person.hobi[1]);

person.nama = "luthfy";
console.log(person.nama);

person.hobi.push("Menonton")
console.log(person.hobi);

let getIdentity = Object.keys(person); // Mengambil keys dalam object
console.log(getIdentity);

let objectToString = JSON.stringify(person); // Mengubah object menjadi string
console.log(objectToString);

let stringToJSON = JSON.parse('{"nama": "Luthfy", "umur": 30, "pekerjaan": "Web Developer"}') // Mengubah string menjadi object
console.log(stringToJSON);

let date = new Date();
console.log(date);

let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
console.log(day, "/", month, "/", year);

delete person.hobi;
console.log(person);