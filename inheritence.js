// Inheritance
class Dog extends Animal {
  #tricks = []; // Private field

  constructor(name) {
    super(name, "Woof");
    this.breed = "Unknown";
  }

  learn(trick) {
    this.#tricks.push(trick);
  }

  showTricks() {
    return this.#tricks.length
      ? `${this.name} knows: ${this.#tricks.join(", ")}`
      : `${this.name} knows no tricks yet.`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "Meow");
  }

  purr() {
    return `${this.name} purrs... 😸`;
  }
}