const siswa = {
    name: "Eimi Fukada",
    age: 25,
    address: "Tokyo Japan"
};

function updateSiswa(newSiswa) {
    newSiswa.name = "Luthfy"
    return newSiswa;
    
}

console.log(updateSiswa(siswa));