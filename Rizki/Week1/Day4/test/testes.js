const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function moveCar(car) {
  car.position += Math.floor(Math.random() * 2) + 1;
}

function showCarPosition(car) {
  let road = '';
  for (let i = 0; i < car.position; i++) {
    road += '=';
  }
  road += car.name;
  console.log(road);
}

const car1 = { name: '*', position: 0 };
const car2 = { name: '&', position: 0 };

function startRace() {
  console.log('Balapan dimulai!');
  setInterval(() => {
    moveCar(car1);
    moveCar(car2);
    showCarPosition(car1);
    showCarPosition(car2);
  }, 2000);
}

rl.question('Ketik "start" untuk memulai balapan: ', (answer) => {
  if (answer === 'start') {
    startRace();
  } else {
    console.log('Belum Siap.');
  }
  rl.close();
});