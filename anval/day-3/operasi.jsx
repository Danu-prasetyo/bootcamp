function calculate(num1, num2, operation, callback) { //fun callback = fun yang memanggil func lainnya dalam parameter
    // fungsi operasi mtk dengan 4 parameter
    let result;
    if(operation === "+"){
        result = num1 + num2;
    } else if(operation === "-"){
        result = num1 - num2;
    }else if(operation === "/"){
        result = num1 / num2;
    }else if(operation === "*"){
        result = num1 * num2;
    } else {
        result = NaN;
    }
    callback(result);
}

function printResult(result) { 
    console.log('Hasil: ' + result);
}

calculate(10, 10, "+", printResult);