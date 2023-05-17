function factorial(number) {
    if (number == 0) return 1;
    if (number < 0) return 'Invalid'
    return number * factorial (number - 1)
}

console.log(factorial(process.argv[2]));