//belajar trycatch pada javascript
function pembagian(angka1,angka2){
    try { //kalo program sukses akan mengeksekusi blok try
        if(angka2 === 0){
            throw "Gabisa dibagi 0 cuy!"
        }
        return angka1/angka2
    } catch (error) {
        //kalo program error akan mengeksekusi catch
        console.error(error);
        return null;
    }
}

let pembagian2 = pembagian(10,2)
console.log(pembagian2)

let pembagian3 = pembagian(10,0)
console.log(pembagian3)



// // function factorial (n){
// //     if (n === 0){
// //         return n * factorial (n - 1);
// //     }
// //     
//     const number2 = 5;
//     const hasil = factorial(number)

// // }