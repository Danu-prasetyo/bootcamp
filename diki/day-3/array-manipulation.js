// ----- Array Manipulation -----

//   --- Find and Filter

// const ages = [10, 14, 16, 17, 20, 24, 27, 30]

// function checkAges(age) {
//   return age < 20
// }

// console.log(ages.find(checkAges)); //Get the first data that passed the check test
// console.log(ages.filter(checkAges)); //Get all the data that passed the check test
// console.log(ages.filter(checkAges).length); //Count all the data that passed the check test


// --- Fill

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 2, 3); // Change the data in array, first number is starting index, second number is stopping index
// console.log(`fill method : ${fruits}`);

// --- Push

// fruits.push("Durian", "Grape") // Add data in the end of array
// console.log(`push method : ${fruits}`);

// --- Pop

// pop = fruits.pop()
// console.log(`pop method : ${pop}`); // Get the last data in the end of array and then return it

// --- Slice

// slice = fruits.slice(0, 1)
// console.log(`slice method : ${slice}`); // Get data base on the starting and stopping index

// --- Sort

// fruits.sort()
// console.log(`sort method : ${fruits}`); // Sort array data in alphabetical order

// --- reverse

// fruits.reverse()
// console.log(`reverse method : ${fruits}`); // The opposite of sort

// const ages = [3, 10, 18, 20, 22]

// function checkAges(age) {
//   return age > 18
// }

// console.log(ages.findIndex(checkAges)); // Find the first index in array that passed the test

// fruits.forEach(function (fruits) { // Get all the data and then return it one by one
//   console.log(`Buah : ${fruits}`);
// })

// function myFunction(item) {
//   console.log(`Data : ${item}`);
// }

// const buah = ["Apple", "Orange", "Cherry"]
// let item = buah.forEach(myFunction);

// --- Three Dimensional Array

// const threeDimensionalArray = [ // Array 1
//   [ // Array 2
//     [1, 2, 3], // Array 3
//     [4, 5, 6],
//     [7, 8, 9]
//   ],
//   [
//     [10, 20, 30], // Array 3
//     [40, 50, 60],
//     [70, 80, 90]
//   ]
// ];

// console.log(threeDimensionalArray); // Get All Array
// console.log(threeDimensionalArray[0]) // Output : [1, 2, 3], [4, 5, 6], [7, 8, 9]
// console.log(threeDimensionalArray[0][0]) // Output : [1, 2, 3]
// console.log(threeDimensionalArray[0][0][0]); // Output : 1

// threeDimensionalArray[1][2][2] = 100 // Change 90 with 100
// console.log(threeDimensionalArray[1][2][2]);
// console.log(threeDimensionalArray[1]);