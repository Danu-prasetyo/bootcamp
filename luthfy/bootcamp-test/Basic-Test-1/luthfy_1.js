let input = 7;

for (let i = 0; i <= input; i++) {
    let space = "";
    for (let j = 0; j <= input - i; j++) {
        space += " ";
    }
    for (let k = 0; k <= 1 * i - 1; k++) {
        space += "* ";
    }
    console.log(space);
}
