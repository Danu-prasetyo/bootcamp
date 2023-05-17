//function biasa
function greet(name){
    console.log("Halo," + name + "!");
}

greet("DIki");

//function callback
function greetUser(name,callback){
    callback(name);
}
//memanggil function callback
greetUser("shinta",greet);