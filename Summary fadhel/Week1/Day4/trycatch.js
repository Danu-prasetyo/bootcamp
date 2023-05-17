function pembagian (no1, no2){
    try {
        if (no2 === 0){
            throw "gabisa di bagi 0 brok!!"
        }
        return no1/no2
    } catch (error){
        console.error(error);
        return null ;
    }
}
const pembagiun= pembagian (20,4)
console.log(pembagiun);
const pembagiun2 = pembagian (0,10)
console.log(pembagiun2); 