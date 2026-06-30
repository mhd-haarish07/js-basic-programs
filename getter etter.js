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
