if (process.argv.length ==2){
    console.log("setidaknya 1 argumen cuy!");
    process.exit(1);
}

constcustom = process.argv[2] || "default";
console.log(`argument text : ${process.argv[2]} ${process.argv[3]}`);