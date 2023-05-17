const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const hasil = sumArray(array);

function sumArray(array) {}

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    hasil += array[i][j];
  }
}

console.log(hasil);
return hasil;
