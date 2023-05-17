//Callback 

//Function Biasa 
function greet(name){
    console.log("Halo, " + name + "!");
}

//Memanggil function biasa
greet ("diki Slebew"); // Output

// function callback\
function greetUser(name,callback){
    callback(name);
}

//Memanggil function callback
greetUser("shinta sitata", greet); //Output

