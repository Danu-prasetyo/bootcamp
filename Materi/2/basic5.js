//funstion yang memanggil dirinya sendiri
function cetakFungsi(name, number) {
    if (number !==0 ) {
    //jika angka tisak sama dengan 0
    console.log(name);
    cetakFungsi(name, number -1); // dia bakal cetak fungsi itu 3 kali sampai dia bernilai 0
    }
}

cetakFungsi("nanda", 4);