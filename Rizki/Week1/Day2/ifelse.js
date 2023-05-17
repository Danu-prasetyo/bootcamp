// If Else
let a = 100
if (a>70){
    console.log("a lebih besar dari 70")
} else {
    console.log("a lebih kecil dari70")
}

if (a == 100){
    console.log("nilainya 100")
}


let classStatus = "close"
let minuteRemain = 5
if (classStatus == "open"){
    console.log("Kelas Bootcamp sedang berjalan")
} else if (minuteRemain){
    console.log("Kelas bootcamp tersisa 5 menit lagi")
} else {
    console.log("Kelas bootcamp telah brakhir")
}

// Nested if
let grade = 83
if (grade >= 70){
    if(grade >=90) {
        console.log("Nilai A")
    } else {
        console.log("Nilai B")
    }
} else {
    console.log("Nilai C")
}

// Switch Case
let tombol = 1;
switch (tombol){
    case 1:{
        console.log("Turn on");
        break;
    }
    case 2:{
        console.log("Turn Off");
        break;
    }
    case 3:{
        console.log("Menu Setting");
        break;
    }
    default:{
        console.log("Do Nothing");
        break;
    }
}

//Ternary Operator

let x = 100
let hasil = x > 50 ?  "lebih besar dari 50" : "lebih kecil dari 50"
console.log(hasil)

// if else if
let z = 70
let hasil2 = z === 100 ? "Nilai 100" : z > 50 ? "nilai lebih dari 50" : "lebih kecil dari 50"
console.log(hasil2)