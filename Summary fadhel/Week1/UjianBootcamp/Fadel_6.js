function sumArray(arr) {
    let total = 0;
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr[x].length; y++) {
        total += arr[x][y];
      }
    }
    return total;
  }
  const array = [
             [1,2,3],
             [4,5,6],
             [7,8,9],
            ]
    let totalSummary = sumArray(array);
    console.log(totalSummary);

