function print(name, number) {
    if (number !== 0) {
        console.log(name);
        print(name, number - 1);
    }
};

print("Luthfy" , 10)