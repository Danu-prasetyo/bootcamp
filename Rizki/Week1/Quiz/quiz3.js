// let mtk = 100
// let fisika = 59 
// let kimia = 59

//     if (mtk>=0 && mtk<=100){
//         if(fisika>=0 && mtk<=100){
//             if(kimia>=0 && mtk<=100){
//                 rata = (mtk+fisika+kimia)/3

//                 console.log (rata);
//                 } 
//                 if(rata >= 60 && rata <=80){
//                     console.log("Anda Lulus");
//                  } else if (rata >= 80){
//                     console.log("Selamat, Anda Lulus dengan baik");
//                 } else {
//                     console.log("Anda Tidak Lulus");
//                 }
//              }
                
//             }
//              else {
//                 console.log("Nilai Tidak Valid");
//             } 
        
    //Cara Lain 

    let  nilaiMatematika = 100
    let  nilaiFisika = 1000
    let  nilaiKimia = 1000
    let  rataRata = (nilaiMatematika + nilaiFisika + nilaiKimia)/3

    if (nilaiMatematika >= 0 && nilaiMatematika <=100 && nilaiFisika >=0 && nilaiFisika <=100 && nilaiKimia >=0 && nilaiKimia <=100){
        if (rataRata >= 80) {
            console.log("Selamat, Anda Lulusa dengan Baik! nilai anda", rataRata);
        } else if (rataRata >=60) {
            console.log("Anda Lulus");
        } else {
            console.log("Anda Tidak Lulusa");
        }
    } else {
        console.log ("Nilai tidak valid");
    }

    
    // BELAJAR LOGIC STATEMENT