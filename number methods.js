// Number methods
let num = 3.14159;
console.log("toFixed(2):", num.toFixed(2));       // "3.14"
console.log("toPrecision(4):", num.toPrecision(4)); // "3.142"
console.log("parseInt:", parseInt("42px"));        // 42
console.log("parseFloat:", parseFloat("3.14abc")); // 3.14
console.log("isNaN:", isNaN("hello"));             // true
console.log("isFinite:", isFinite(1/0));           // false
console.log("Number.isInteger:", Number.isInteger(42)); // true