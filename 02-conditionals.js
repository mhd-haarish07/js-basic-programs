// ============================================================
//          2. CONDITIONALS
// ============================================================

// if / else if / else
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Ternary Operator
let result = marks >= 50 ? "Pass" : "Fail";
console.log("Result:", result);

// Nullish Coalescing
let username = null;
console.log(username ?? "Guest");  // "Guest"

// Optional Chaining
let user = { profile: { city: "Chennai" } };
console.log(user?.profile?.city);   // "Chennai"
console.log(user?.address?.zip);    // undefined (no error)

// Switch Statement
let day = 3;
switch (day) {
  case 1: console.log("Monday");    break;
  case 2: console.log("Tuesday");   break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday");  break;
  case 5: console.log("Friday");    break;
  default: console.log("Weekend");
}

// Logical Operators
let a = true, b = false;
console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false
