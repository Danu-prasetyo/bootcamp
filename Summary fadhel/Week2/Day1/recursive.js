// function faktorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * faktorial(n-1);
//     }
//   }
  
//   function hitungFaktorial(n) {
//     if (!isNaN(n)) {
//       const hasil = faktorial(n);
//       console.log(`Faktorial dari ${n} adalah ${hasil}`);
//     } else {
//       console.log("Input harus berupa angka!");
//     }
//   }
  
//   const input = process.argv[2];
//   if (input !== undefined) {
//     const angka = parseInt(input);
//     hitungFaktorial(angka);
//   } else {
//     console.log("Masukkan argumen!");
//   }
  
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Recursive2


  function cariAngkaNol(data, barisData = 0, kolomData = 0, barisDenganNol = [], kolomDenganNol = []) {
    if (barisData === data.length) {
      return [barisDenganNol, kolomDenganNol];
    }
    
    if (data[barisData].includes(0)) {
      barisDenganNol.push(barisData);
    }
    
    for (let kolomData = 0; kolomData < data[0].length; kolomData++) {
      if (data[barisData][kolomData] === 0) {
        kolomDenganNol.push(kolomData);
      }
    }
    return cariAngkaNol(data, barisData + 1,kolomData +1 , barisDenganNol, kolomDenganNol);
  } 
  const data = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1],
  ];
  let [barisDenganNol, kolomDenganNol] = cariAngkaNol(data);
        if (barisDenganNol.length > 0) {
            console.log("Angka 0 ditemukan pada baris: " + barisDenganNol.join(", "));
        } else {
            console.log("Tidak ada angka 0 dalam baris.");
        }
  
        if (kolomDenganNol.length > 0) {
            console.log("Angka 0 ditemukan pada kolom: " + kolomDenganNol.join(", "));
        } else {
            console.log("Tidak ada angka 0 dalam kolom.");
    }
  
  ////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  


// const data : 
//   [
//     ["p", "w", "q", "i", "z"],
//     ["r", "s", "f", "k", "d"],
//     ["o", "i", "d", "w", "a"],
//     ["n", "n", "v", "a", "n"],
//     ["z", "t", "a", "n", "u"],
// ]