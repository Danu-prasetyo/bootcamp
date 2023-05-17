class Persegi {
    constructor(p, l) {
        this.panjang = p;
        this.lebar = l;
    }
    hitungLuas() {
        let luas = this.panjang * this.lebar;
        return 'Luas persegi panjang adalah ' + luas;
    }
};

let input = new Persegi(5, 5);
console.log(input.hitungLuas());