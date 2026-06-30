// ============================================================
//          10. HIGHER ORDER FUNCTIONS
// ============================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
console.log("--- forEach ---");
numbers.forEach((n, i) => console.log(`Index ${i}: ${n}`));

// map
console.log("--- map ---");
let squares = numbers.map(n => n ** 2);
console.log("Squares:", squares);

// filter
console.log("--- filter ---");
let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce
console.log("--- reduce ---");
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

let max = numbers.reduce((a, b) => a > b ? a : b);
console.log("Max:", max);

// every & some
console.log("--- every & some ---");
console.log("All positive:", numbers.every(n => n > 0));   // true
console.log("All > 5:", numbers.every(n => n > 5));        // false
console.log("Some > 8:", numbers.some(n => n > 8));        // true

// find & findIndex
console.log("--- find & findIndex ---");
console.log("First > 5:", numbers.find(n => n > 5));           // 6
console.log("Index of first > 5:", numbers.findIndex(n => n > 5)); // 5

// flatMap
console.log("--- flatMap ---");
let words = ["Hello World", "Foo Bar"];
let allWords = words.flatMap(s => s.split(" "));
console.log("All words:", allWords);

// sort with callback
console.log("--- sort ---");
let people = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
];
people.sort((a, b) => a.age - b.age);
console.log("By age:", people.map(p => p.name));

// Chaining
console.log("--- Chaining ---");
let result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((sum, n) => sum + n, 0);
console.log("Sum of squares of evens:", result); // 220

// Custom HOF
function repeat(fn, times) {
  for (let i = 0; i < times; i++) fn(i);
}
repeat(i => console.log("Repeat:", i), 3);
