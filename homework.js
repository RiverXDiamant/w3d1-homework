// * ========== Creating Classes & Factories ======

// * Hamster 🐹

// *    attributes:
// *       owner - string, initially set as an empty string
// !       name - string, set the name from parameter in constructor method
// *       price - integer, set as 15

// *    methods:
// *        wheelRun() - log "squeak squeak"
// *        eatFood() - log "nibble nibble"
// *        getPrice() - return the price

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelrun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

// * ===== Person 🧑🏿

// * attributes:
// !    name - set name from parameter in constructor method
// *    age - initially 0
// *    height - initially 0
// *    weight - initially 0
// *    mood - integer starting at 0 initially
// *    hamsters - empty array initially
// *    bankAccount - initially set to 0

// * methods:
// *    getName() - returns name
// *    getAge() - returns age
// *    getWeight() - returns weight
// *    greet() - logs a message with person's name
// *    eat() - increment weight, increment mood
// *    exercise() - decrement weight
// *    ageUp() - increment age, increment height, increment weight,
// *    decrement mood, increment bank account by 10 (birthday money)
// *    buyHamster(hamster) - push the hamster object onto the hamster array,
// *    increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
  constructor(name) {
    (this.name = name),
      (this.age = 0),
      (this.height = 0),
      (this.weight = 0),
      (this.mood = 0),
      (this.hamsters = []),
      (this.bankAccount = 0);
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hey! My name is ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// * Create a Story with your Person class
// * Feel free to update or add methods to automate some of these tasks.
// *    Instantiate a new Person named Timmy
// *    Age Timmy five years
// *    At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// *    Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// *    Age Timmy 9 years

const timmy = new Person("Timmy");
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}
// console.log(timmy);

// timmy.eat();
// timmy.eat();
// timmy.eat();
// timmy.eat();
// timmy.eat();

for (let i = 0; i < 5; i++) {
  timmy.eat();
}

// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
// timmy.exercise();

for (let i = 0; i < 5; i++) {
  timmy.exercise();
}

for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}

// console.log(timmy);

// *    Create a hamster named "Gus"
// *    Set Gus's owner to the string "Timmy"
// *    Have Timmy "buy" Gus
// *    Age Timmy 15 years
// *    Have Timmy eat twice
// *    Have Timmy exercise twice

const gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
// console.log(gus);

for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}

for (let i = 0; i < 2; i++) {
  timmy.eat();
}

for (let i = 0; i < 2; i++) {
  timmy.exercise();
}

console.log(timmy);
