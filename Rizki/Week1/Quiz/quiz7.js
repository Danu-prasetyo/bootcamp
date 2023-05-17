// buatlah sebuah fungsi dengan nama "filterLaptop" yang menerima tiga parameter,
// yaitu array laptop, minimal harga, dan maksimal harga (laptop, minHarga, maxHarga),
// fungsi ini akan mencari laptop yang memiliki harga diantara minimal harga dan maksimal harga, 
// lalu mengembalikan nilai array baru yang hanya berisi laptop - laptop tersebut.

// const laptop = [
//     {id: 1, nama: "Lenoboy", harga:15000000},
//     {id: 2, nama: "Aus REOG", harga:50000000},
//     {id: 3, nama: "De El", harga:10000000},
//     {id: 4, nama: "MSG", harga:30000000}
// ];


// function filterLaptop(laptop,minimalHarga,maksimalHarga){

//     hasilMencari = laptop.filter(
//         function (filtered) {
//             if (filtered.harga >= minimalHarga && filtered.harga <= maksimalHarga) {
//                 return filtered;
//             }
//         }
//     )
//     if (hasilMencari.length == 0) {
//         return 'Not Found'
//     }
//     return hasilMencari
// }
// console.log(filterLaptop(laptop, 1000000, 50000000))

// Cara lain

// const laptop = [
//     {id: 1, nama: "Lenoboy", harga:15000000},
//     {id: 2, nama: "Aus REOG", harga:50000000},
//     {id: 3, nama: "De El", harga:10000000},
//     {id: 4, nama: "MSG", harga:30000000}
// ];

// function filterLaptop(laptop,minimalHarga = 1000000,maksimalHarga = 16000000){

//     let data = []
//     let no = 0
//     laptop.forEach(element => {
//         if(element.harga >= minimalHarga && element.harga <= maksimalHarga) {
//             data[no++] = "nama :" + element.nama + "harga :" + element.harga
//         }
//     })
//     if(data.length == 0) {
//         return "data not Found"
//     }

//     return(data);
// }

// console.log(filterLaptop(laptop))


const laptop = [
    {id: 1, nama: "Lenoboy", harga:15000000},
    {id: 2, nama: "Aus REOG", harga:50000000},
    {id: 3, nama: "De El", harga:10000000},
    {id: 4, nama: "MSG", harga:30000000}
];

function filterLaptop(laptop,minimalHarga = 1000000,maksimalHarga = 12000000){

    let data = []
    laptop.forEach(element => {
        if(element.harga >= minimalHarga && element.harga <= maksimalHarga) {
            data.push(element.nama , element.harga)
        }
    })
    if(data.length == 0) {
        return "data not Found"
    }

    return(data);
}

console.log(filterLaptop(laptop))

