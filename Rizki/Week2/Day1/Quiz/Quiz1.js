//process.argv = array yang berisi argumen yang kita ketik di CLI
if (process.argv.length === 2) {

    //jika data arraynya sama dengan 2 maka akan cetak log
    console.log("Masukan Angka Bro");
    process.exit(); //setelah itu program diakhiri dengan exit (break)
}

function factorial(number){
    if (number == 0) {
        return 1;
    } else if (number <=0) {
        return 1;
    } else {
        return number * factorial (number -1);
    }
            
}

//log ini untuk mencetak argumen yang udah d input
console.log(factorial((process.argv[2])));