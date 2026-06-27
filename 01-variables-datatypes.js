// ============================================================
//          1. VARIABLES & DATA TYPES
// ============================================================

let name = "Alice";          // String
let age = 25;                // Number
let isStudent = true;        // Boolean
let score = null;            // Null
let address;                 // Undefined
const PI = 3.14159;          // Constant

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Score:", score);
console.log("Address:", address);
console.log("PI:", PI);

// typeof
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof score);      // object (quirk of JS)
console.log(typeof address);    // undefined

// var vs let vs const
var x = 10;   // function scoped, can re-declare
let y = 20;   // block scoped, cannot re-declare
const z = 30; // block scoped, cannot reassign

console.log(x, y, z);

// Type Conversion
console.log(Number("42"));       // 42
console.log(String(100));        // "100"
console.log(Boolean(0));         // false
console.log(Boolean("hello"));   // true
