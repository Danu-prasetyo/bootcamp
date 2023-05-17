function findUserCountry(user){
    
     country = user.address && user.address.country //(variable default adalah "var")
     return country || "unknown" ;
}
let user1 ={
    name: "jokowi", age: 25,
    address : {
        city:"tangsel", country:"indonesia"
    },
};
let user2={
    name:"ma'ruf",
    age:30

};
console.log(findUserCountry(user1));
console.log(findUserCountry(user2));