// ----- 1

// if (process.argv.length === 2) {
//   console.log("Masukan Angka");
//   process.exit(404);
// }

// const custom = process.argv[2] || "Default";

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   } else if (x < 0) {
//     return "Input Tidak Valid"
//   } else {
//     return x * factorial(x - 1);
//   }
// }



// console.log(factorial(parseInt(process.argv[2])));

// ----- 2

const arr = [
  [0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0],
];

function findZero(arr, x= 0, y = 0, result = []) {
  if (x>= arr.length || y >= arr[x].length) {
    return result;
  }
  
  if (arr[x][y] === 0) {
    result.push(`(${x}, ${y})`);
  }
  
  if (y === arr[x].length - 1) {
    findZero(arr, x+ 1, 0, result);
  } else {
    findZero(arr, x, y + 1, result);
  }
  
  return result;
}

console.log(findZero(arr));

// ----- 3

// const array = [
//   ['p', 'z', 'w', 'q', 'i'],
//   ['r', 's', 'f', 'k', 'd'],
//   ['o', 'i', 'd', 'w', 'a'],
//   ['n', 'n', 'v', 'a', 'n'],
//   ['z', 'i', 'a', 'n', 'u']
// ]