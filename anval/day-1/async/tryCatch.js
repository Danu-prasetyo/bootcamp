// belajar try catch pada js
const { log } = require("console");

function pembagian(angka1, angka2){
    try{
        // kalo program sukses dy bakal ngeksekusi blok try
        if(angka1 === 0){
            throw "ga bisa dibagi 0 ge"
        }
        return angka1/angka2;
    }catch (err){
        console.error(err);
        return null;
    }
}

let pembagiun = pembagian(10, 2);
console.log(pembagiun);
let pembagiun2 = pembagian(10, 0)
console.log(pembagiun2);