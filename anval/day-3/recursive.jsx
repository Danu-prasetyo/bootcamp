// function yang memanggil dirinya sendiri
function cetak(name, number) {
    if(number !== 0){
        // jka angka tidak sama dengan 0
        console.log(name)
        cetak(name, number - 1)
    }
}

cetak('upi', 5)