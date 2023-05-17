function pembagian(angka1,angka2){
    try{ // kalau program suksek dia bakal mengeksekusi blok try
        if(angka2 ===0){
            throw "gabisa dibagi 2"
        }
        return angka1/angka2
    }catch (error) { //kalau program error dia bakal mengeksekusi catch
        console.error(error);
        return null;
    }
}

let pembagiun = pembagian(10,2);
console.log(pembagiun);
let pembagiun2 = pembagian(10,0);
console.log(pembagiun2);