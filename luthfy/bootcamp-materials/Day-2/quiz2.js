let matematika = 50;
let fisika = 50;
let kimia = 50;
let rataRata = (matematika + kimia + fisika) / 3;

if (matematika >= 0 && matematika <= 100) {
    if (fisika >= 0 && fisika <= 100) {
        if (kimia >= 0 && kimia <= 100) {
            if (rataRata >= 80) {
                console.log("Anda lulus dengan baik, nilai anda: ", rataRata);
            } else if (rataRata >= 60) {
                console.log("Anda lulus, nilai anda: ", rataRata);
            } else {
                console.log("Anda tidak lulus, nilai anda: ", rataRata);
            }
        } else {
            console.log("Maaf input tidak valid");
        }
    } else {
        console.log("Maaf input tidak valid");
    }
} else {
    console.log("Maaf input tidak valid");
};