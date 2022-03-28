// let incomes = [62000, 67000, 75000];
// let payRise = 5000;
// let total = 0;

// for (let income of incomes) {
//   income += payRise;
//   total += income;
// }

// console.log(total);

////////////////

// function add(...nums) {
//   let total = nums.reduce((x, y) => x + y);
//   console.log(total);
// }

// add(1, 2, 3, 4, 5);

////////////////////

// let myName = "Tupipupi";

// console.log(myName.padStart(30, "lol"));

/////////////////////

export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }

  makeLick(lick) {
    console.log(lick);
  }

  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  static return10() {
    return 10;
  }

  static buildCat() {
    return new Animal("Cat", 5);
  }
}
