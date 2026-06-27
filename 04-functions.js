// ============================================================
//          4. FUNCTIONS
// ============================================================

// Regular Function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Function Expression
const add = function(a, b) {
  return a + b;
};
console.log("Sum:", add(3, 4));

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Product:", multiply(3, 4));

// Default Parameters
function power(base, exp = 2) {
  return Math.pow(base, exp);
}
console.log("power(3):", power(3));       // 9
console.log("power(2,10):", power(2, 10)); // 1024

// Rest Parameters
function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4, 5)); // 15

// Spread in function call
function addThree(a, b, c) { return a + b + c; }
let nums = [10, 20, 30];
console.log("Spread call:", addThree(...nums)); // 60

// Callback Function
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log("Callback add:", applyOperation(5, 3, (a, b) => a + b));
console.log("Callback mul:", applyOperation(5, 3, (a, b) => a * b));

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE runs immediately!");
})();

// Recursive Function
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("Factorial(6):", factorial(6)); // 720
