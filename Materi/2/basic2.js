function calculate(num1,num1,operation,callback) { //function callbak = function yang memanggil function lainnya ke dalam parameter
    //fungsi operasi matematika dengan 4 parameter

    let result;
    if (operation === "+") {
        result = num1 +  num2;
    } else if (operation === "-" ) {
        result= num1 - num2;
    } else if (operation === "*" ) {
        result= num1 * num2;
    } else if (operation === "/" ) {
        result= num1 / num2;
    } else {
        result = NaN;
    }
    callback(result);
}

function printResult(result) {
    console.log("Hasil:" + result);
}

calculate(10,10, "*", printResult); //ouput hasil