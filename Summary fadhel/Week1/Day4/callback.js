//=======================================================================//
//=======================================================================//

//function biasa
function greet(name) {
    console.log("halo, " + name + "!")
}

//memanggil function biasa 
greet("Andi ")

//callback
function greetUser(name, callback){
     callback(name)
}

//memanggil function callback
greetUser("Budi", greet)