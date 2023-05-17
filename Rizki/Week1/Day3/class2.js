class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a' + this.carname;
    }
}

class model extends Car {
    constructor(brand,mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
mycar = new model ("Ford","Mustang");
console.log(mycar.show());