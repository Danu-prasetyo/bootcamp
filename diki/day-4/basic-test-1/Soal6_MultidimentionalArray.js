function sumArray(arr) {
  let hitung = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      hitung += arr[i][j];
    }
  }
  return hitung
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(sumArray(array));