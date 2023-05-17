const readline = require('readline');

class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
    this.position = 0;
  }

  accelerate() {
    this.speed += Math.floor(Math.random() * 10) + 1;
  }

  move() {
    this.position += this.speed;
  }

  reset() {
    this.speed = 0;
    this.position = 0;
  }
}

function raceSimulation() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the length of the track: ', (trackLength) => {
    rl.question('Enter the number of cars: ', (numCars) => {
      
      const raceDistance = parseInt(trackLength);
      const cars = [];

      for (let i = 1; i <= parseInt(numCars); i++) {
        const car = new Car(`Car ${i}`);
        cars.push(car);
      }

      let winner = null;

      console.log("Press Enter to start the race...");

      rl.on('line', () => {
        if (!winner) {
          race();
        } else {
          console.log("Race is over. Restart the program to start a new race.");
        }
      });

      function race() {
        for (const car of cars) {
          car.accelerate();
          car.move();

          console.log(`${car.name} - Position: ${car.position}`);

          if (car.position >= raceDistance) {
            winner = car.name;
            break;
          }
        }

        if (winner) {
          console.log(`The winner is: ${winner}`);
        }
      }
    });
  });
}

raceSimulation();
