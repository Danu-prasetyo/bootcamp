// find filter
const ages = [5,8,12,19,20,23,24,26,28,30];

function checkAge(age){
    return age > 18 ;
}
console.log(ages.findIndex(checkAge));
console.log(ages.find(checkAge));
console.log(ages.filter(checkAge));

// fill Push pop slice
console.log("============================");
const fruits = ["banana","orange","watermelon","melon"]
fruits.fill ("kiwi",0,2);
console.log("============================");
fruits.push("durian","nangka")
console.log(fruits);
console.log("============================");
cobaPop = fruits.pop()
console.log("pop",cobaPop);
console.log("============================");
console.log("data setelah di pop",cobaPop);
let cobaSlice = fruits.slice(1,2);
console.log("data setelah di slice",cobaSlice);
console.log("============================");
console.log(fruits.sort());//asscending data
console.log(fruits.reverse());//decending data

// item 
const buah = ["apel","jeruk","ceri"]
let item = fruits.forEach(myFunction);
function myFunction(item){
    console.log("data"+ item);
}