const person = {
  nama: "john Doe",
  umur: 30,
  pekerjaan: "Pengembang Web",
  alamat: {
    jalan: "jl.Raya No.123",
    kota: "Jakarta",
    negara: "Indonesia",
  },
  hobi: ["Olahraga", "Musik", "Membaca"],
};

let ambilIdentitas = Object.keys(person); //ambil keys dalam objek
console.log(ambilIdentitas);

person.hobi.push("Menari");
person.nama = "shinta";
console.log(person.hobi);
console.log(person.nama);
console.log(ambilIdentitas);

let objectToString = JSON.stringify(person);
console.log(objectToString);

let stringToJSON = JSON.parse('{ "nama": "shinta" }');
console.log(stringToJSON);
