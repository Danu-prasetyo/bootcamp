let array = [
  ['P', 'Z', 'W', 'Q', 'I'],
  ['R', 'S', 'F', 'K', 'D'],
  ['O', 'I', 'D', 'W', 'A'],
  ['N', 'N', 'V', 'A', 'N'],
  ['Z', 'T', 'A', 'N', 'U'],
];

function matchWord(arr, word) {
  function matchHelper(arr, word, row, col, index) {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= arr.length ||
      col >= arr[0].length
    ) {
      return false;
    }

    if (arr[row][col] !== word[index]) {
      return false;
    }

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (matchHelper(arr, word, newRow, newCol, index + 1)) {
        return true;
      }
    }

    return false;
  }

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (matchHelper(arr, word, row, col, 0)) {
        return 'Ketemu';
      }
    }
  }

  return 'Tidak ketemu';
}

console.log(matchWord(array, process.argv[2]));
