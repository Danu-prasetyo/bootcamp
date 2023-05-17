

function filterNama (nama,cari){
    
    const hasilNyari = nama.filter((nama2 => nama2.includes(cari))) 
    //filter untuk mencari semua elemen dalam array dengan kriteria tertentu
    // includes untuk mencari nilai tertentu didalam array
    return hasilNyari
} 
    const nama2 = ["danu","dini","deni","rizky","rifky","riki","rizieq","ridwan"];
    const NyariNama = "de"
    const hasilNyari = filterNama(nama2, NyariNama)
    console.log(hasilNyari)






