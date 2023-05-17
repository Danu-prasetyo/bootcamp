let hari = "Sunday";
switch (hari){
    case "Sunday":{
        console.log("1");
        break;
    }
    case 2:{
        console.log("Monday");
        break;
    }
    case 3:{
        console.log("Tuesday");
        break;
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("Thursday");
        break;
    }
    case 6:{
        console.log("Friday");
        break;
    }
    case 7:{
        console.log("Saturday");
        break;
    }
    default:{
        console.log("Input Tidak Valid");
        break;
    }
}

let a = 4
let hasil = a === 0 ? "Nilai 0" : a > 0 ? "Adalah Bilangan Positif" : "Adalah Bilangan Negatif"
console.log("Angka", a, hasil)

let angka = 5 
let jenis = angka > 0 ? "Positif" : angka < 0 ? "negatif" : "nol";
console.log(`Angka ${angka} adalah bilangin ${jenis}`); 

//(backtick berfungsi untuk menggabungkan string dan variable mengunakan ${})