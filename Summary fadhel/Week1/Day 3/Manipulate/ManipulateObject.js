const person = {
    nama : "john",
    umur : 30,
    kerjaan : "pilot",
   alamat:{
    jalan : "jalan-jalan",
    kota : "jekardah",
    negara: "indo",
   },
   hobi : ["olahraga","musik","baca"]
};
person.nama = "joan" // manipulasi object
person.hobi.push=("tidur")
console.log("============================");
console.log(person);
console.log("============================");
console.log(person.hobi);
console.log("============================");
let ambilIdentitas = Object.keys(person)
console.log(ambilIdentitas);
let objectToString = JSON.stringify(person)
console.log(objectToString);
let stringToJSON = JSON.parse('{"nama":"john","age":"30","kerjaan":"pilot"}')
JSON.stringify
console.log(stringToJSON);

let waktu = new Date()
console.log(waktu.getTimezoneOffset);