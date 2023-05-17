// try catch
function pembagian(angka1, angka2) {
    try {
        // Jika sesuai maka blok yang dieksekusi blok yang ini
        if (angka2 == 0) {
            throw "Gabisa dibagi 0 cuyy!";
        }
        return angka1 / angka2;
    } catch (error) {
        // Jika terdapat kesalahan maka yang akan dieksekusi blok yang ini
        console.error(error);
        return null;
    }
};

let pembagian1 = pembagian(10, 2);
console.log(pembagian1);

let pembagian2 = pembagian(10, 0);
console.log(pembagian2);