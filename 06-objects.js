// ============================================================
//          6. OBJECTS
// ============================================================

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
};

// Access
console.log(student.name);
console.log(student["age"]);
console.log(student.greet());

// Add / Update / Delete
student.city = "Chennai";
student.age = 21;
delete student.grade;
console.log("Updated:", student);

// Destructuring
const { name, age, city = "Unknown" } = student;
console.log(name, age, city);

// Rename while destructuring
const { name: studentName } = student;
console.log("Renamed:", studentName);

// Spread
const clone = { ...student, country: "India" };
console.log("Clone:", clone);

// Object methods
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));

// Object.assign
const merged = Object.assign({}, student, { email: "alice@mail.com" });
console.log("Merged:", merged);

// Object.freeze (immutable)
const config = Object.freeze({ theme: "dark", lang: "en" });
config.theme = "light"; // silently fails
console.log("Frozen:", config.theme); // still "dark"

// Computed property names
let key = "score";
let obj = { [key]: 95 };
console.log("Computed:", obj); // { score: 95 }

// Shorthand
let x = 10, y = 20;
let point = { x, y };
console.log("Shorthand:", point);
