function perkalian(param1, param2) {
    let result = param1 * param2

    return result
}

function penjumlahan(param1, param2, param3) {
    let penjumlahan = param1 + param2

    let result = perkalian(penjumlahan, param3)

    return result
}

let result = penjumlahan(1, 2, 5)
console.log(result)