const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function sumArray(sum) {
    let count = 0;
    for (let i = 0; i < sum.length; i++) {
        for (let j = 0; j < sum[i].length; j++) {
            count += sum[i][j];
        }
    }
    return 'Summary result: ' + count;
}

console.log(sumArray(array));