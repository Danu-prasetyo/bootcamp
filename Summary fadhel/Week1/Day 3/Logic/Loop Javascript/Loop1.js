// while loop
let n = 20
let i = 2 
while (i <= n){
    let bilPrima = true ;
    let j = 2 ;
    while (j < i ){
        if (i % j === 0){
            bilPrima = false;
            break; 
        }
        j++;
    }
    if (bilPrima){
        console.log(i);
    }
    i++;
}
