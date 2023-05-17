class Persegi {
    constructor(lebar, tinggi){
        this.lebar = lebar;
        this.tinggi = tinggi;
    }
    getluas(){
        let luas = this.lebar * this.tinggi;
        return luas
    }
}
 
let luas = new Persegi(5, 5)
console.log(luas.getluas())