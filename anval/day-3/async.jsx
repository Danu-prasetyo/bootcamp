// fun biasa
function greet(name) {
    console.log(`Halo, ${name}`);
}

// manggil fun biasa
greet('andi')

// fun callback
function greetUser(name, callback) {
    callback(name)
}

// manggil fun callback
greetUser('budi', greet)