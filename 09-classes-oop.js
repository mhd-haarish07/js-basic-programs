// ============================================================
//          9. CLASSES & OOP
// ============================================================

// Base Class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says ${this.sound}!`;
  }

  toString() {
    return `Animal(${this.name})`;
  }
}

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

// Usage
const dog = new Dog("Rex");
console.log(dog.speak());
dog.learn("sit");
dog.learn("fetch");
console.log(dog.showTricks());

const cat = new Cat("Whiskers");
console.log(cat.speak());
console.log(cat.purr());

// instanceof
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(cat instanceof Dog);    // false

// Static Methods
class MathHelper {
  static add(a, b) { return a + b; }
  static square(n) { return n * n; }
}
console.log("Static add:", MathHelper.add(3, 4));
console.log("Static square:", MathHelper.square(5));

// Getters & Setters
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() { return this._radius; }
  set radius(r) {
    if (r < 0) throw new Error("Radius cannot be negative");
    this._radius = r;
  }
  get area() { return +(Math.PI * this._radius ** 2).toFixed(2); }
  get circumference() { return +(2 * Math.PI * this._radius).toFixed(2); }
}

const c = new Circle(5);
console.log("Area:", c.area);
console.log("Circumference:", c.circumference);
c.radius = 10;
console.log("New area:", c.area);
