let array = [
    [0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0]
];

function findZero(arr, baris = 0, kolom = 0) {
    if (baris === arr.length) {
        baris = 0;
        kolom++;
    }
  
    if (kolom === arr[0].length) {
        return [];
    }
  
    if (arr[baris][kolom] === 0) {
        return [[baris, kolom], ...findZero(arr, baris + 1, kolom)];
    }
  
    return findZero(arr, baris + 1, kolom);
}

console.log(findZero(array));