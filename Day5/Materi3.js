// //materi 3
// function pembagian(angka1, angka2) {
//     try {
//         if (angka2 === 0) {
//             throw "gabisa dibagi 0 cuy!"
//         }
//         return angka1 / angka2
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

// let pembagiun = pembagian (10, 2)
// console.log(pembagiun);

// let pembagiun2 = pembagian (10, 0)
// console.log(pembagiun2);


function displayer1(some) {
    console.log(some);
}

function calculator1(num1,num2,callback) {
    let sum=num1+num2;
    callback(sum)
}

function perkalian(num1,num2,callback) {
    let sum=num1*num2;
    callback(sum);
}

calculator1(4,5,displayer1)
perkalian(4,5,displayer1)