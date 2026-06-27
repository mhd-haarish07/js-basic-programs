// ============================================================
//          3. LOOPS
// ============================================================

// For Loop
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}

// While Loop
console.log("--- While Loop ---");
let count = 1;
while (count <= 5) {
  console.log("count =", count);
  count++;
}

// Do-While Loop
console.log("--- Do-While Loop ---");
let num = 1;
do {
  console.log("num =", num);
  num++;
} while (num <= 5);

// For...of Loop (Arrays)
console.log("--- For...of Loop ---");
const fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// For...in Loop (Objects)
console.log("--- For...in Loop ---");
const person = { name: "Bob", age: 30, city: "Chennai" };
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Break & Continue
console.log("--- Break & Continue ---");
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  if (i % 2 === 0) continue;
  console.log(i);  // prints 1, 3, 5
}

// Nested Loop (Multiplication Table)
console.log("--- 3x3 Multiplication Table ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    process.stdout.write(`${i * j}\t`);
  }
  console.log();
}
