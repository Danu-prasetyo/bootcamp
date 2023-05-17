function faktorial(num) {
    if (num===0) {
        return 1 ;
    }else if (num>0) {
        return ( num * faktorial(num-1));
    } 
}

console.log(faktorial(process.argv[2]));
// console.log((process.argv));