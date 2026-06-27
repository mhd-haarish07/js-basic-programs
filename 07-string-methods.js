// ============================================================
//          7. STRING METHODS
// ============================================================

let str = "  Hello, JavaScript World!  ";

console.log("Original:    |" + str + "|");
console.log("trim:        |" + str.trim() + "|");
console.log("toUpperCase:", str.trim().toUpperCase());
console.log("toLowerCase:", str.trim().toLowerCase());

let s = str.trim(); // "Hello, JavaScript World!"
console.log("length:", s.length);
console.log("charAt(0):", s.charAt(0));
console.log("charCodeAt(0):", s.charCodeAt(0));
console.log("indexOf('JavaScript'):", s.indexOf("JavaScript"));
console.log("includes('World'):", s.includes("World"));
console.log("startsWith('Hello'):", s.startsWith("Hello"));
console.log("endsWith('!'):", s.endsWith("!"));
console.log("slice(7, 17):", s.slice(7, 17));
console.log("substring(7,17):", s.substring(7, 17));
console.log("replace:", s.replace("World", "Universe"));
console.log("replaceAll:", "aabbcc".replaceAll("b", "x"));
console.log("split:", s.split(", "));
console.log("repeat:", "Ha".repeat(3));
console.log("padStart:", "5".padStart(4, "0"));   // "0005"
console.log("padEnd:", "5".padEnd(4, "0"));       // "5000"
console.log("at(-1):", s.at(-1));                 // last char "!"

// Template Literals
let name = "Bob";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`2 + 2 = ${2 + 2}`);

// Multi-line string
let multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// String to Array and back
let word = "hello";
let reversed = word.split("").reverse().join("");
console.log("Reversed:", reversed); // "olleh"
