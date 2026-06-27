// ============================================================
//          8. MATH OPERATIONS
// ============================================================

// Basic Arithmetic
let a = 10, b = 3;
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Assignment Operators
let x = 10;
x += 5;  console.log("+=:", x);
x -= 3;  console.log("-=:", x);
x *= 2;  console.log("*=:", x);
x /= 4;  console.log("/=:", x);
x **= 2; console.log("**=:", x);

// Math Object
console.log("PI:", Math.PI);
console.log("E:", Math.E);
console.log("max:", Math.max(10, 20, 30));
console.log("min:", Math.min(10, 20, 30));
console.log("abs:", Math.abs(-45));
console.log("round:", Math.round(4.5));
console.log("floor:", Math.floor(4.9));
console.log("ceil:", Math.ceil(4.1));
console.log("trunc:", Math.trunc(4.9));   // 4
console.log("sqrt:", Math.sqrt(144));
console.log("cbrt:", Math.cbrt(27));      // 3
console.log("pow:", Math.pow(2, 8));
console.log("log:", Math.log(Math.E));    // 1
console.log("log2:", Math.log2(8));       // 3
console.log("log10:", Math.log10(1000));  // 3

// Random Numbers
console.log("random (0-1):", Math.random());
console.log("random int 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("random int 1-100:", Math.floor(Math.random() * 100) + 1);

// Number methods
let num = 3.14159;
console.log("toFixed(2):", num.toFixed(2));       // "3.14"
console.log("toPrecision(4):", num.toPrecision(4)); // "3.142"
console.log("parseInt:", parseInt("42px"));        // 42
console.log("parseFloat:", parseFloat("3.14abc")); // 3.14
console.log("isNaN:", isNaN("hello"));             // true
console.log("isFinite:", isFinite(1/0));           // false
console.log("Number.isInteger:", Number.isInteger(42)); // true
