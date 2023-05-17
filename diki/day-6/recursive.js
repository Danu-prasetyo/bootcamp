// ----- Recursive -----

// function display (name, number) {
//   if (number !== 0) {
//     console.log(name);
//     display(name, number - 1)
//   }
// }
// display("Diky", 3)

// const arr = [
//   [0, 1, 1, 1, 1],
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 0, 1, 1],
//   [1, 1, 1, 1, 0],
// ]

// function findZero(arr, x = 0, y = 0, indices = []) {
//   // Check if current index contains a zero
//   if (arr[x][y] === 0) {
//     indices.push(`(${x}, ${y})`);
//   }

//   // Check if we have reached the end of the array
//   if (x === arr.length - 1 && y === arr[0].length - 1) {
//     return indices;
//   }

//   // Check if we have reached the end of a row
//   if (y === arr[0].length - 1) {
//     return findZero(arr, x + 1, 0, indices);
//   }

//   // Continue searching in the same row
//   return findZero(arr, x, y + 1, indices);
// }

// console.log(findZero(arr));