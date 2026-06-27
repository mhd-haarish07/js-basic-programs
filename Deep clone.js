 // Deep clone
const original = { name: "Alice", scores: [90, 85, 92] };
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.scores.push(99);
console.log("Original unchanged:", original.scores);
console.log("Clone modified:", deepClone.scores);
