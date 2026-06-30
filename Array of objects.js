// ============================================================
//          14. ARRAY OF OBJECTS
// ============================================================

const students = [
  { id: 1, name: "Alice",   marks: 90, subject: "Math" },
  { id: 2, name: "Bob",     marks: 72, subject: "Science" },
  { id: 3, name: "Carol",   marks: 85, subject: "Math" },
  { id: 4, name: "Dave",    marks: 60, subject: "Science" },
  { id: 5, name: "Eve",     marks: 95, subject: "Math" },
  { id: 6, name: "Frank",   marks: 55, subject: "Science" },
];

// Sort by marks descending
let ranked = [...students].sort((a, b) => b.marks - a.marks);
console.log("Top student:", ranked[0].name);
console.log("Ranking:", ranked.map(s => s.name));

// Filter - passed students (marks >= 70)
let passed = students.filter(s => s.marks >= 70);
console.log("Passed:", passed.map(s => s.name));

// Find by ID
let found = students.find(s => s.id === 3);
console.log("Found:", found);

// Average marks
let avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
console.log("Average marks:", avg.toFixed(2));

// Group by subject
let grouped = students.reduce((groups, s) => {
  (groups[s.subject] = groups[s.subject] || []).push(s.name);
  return groups;
}, {});
console.log("Grouped:", grouped);

// Map to new shape
let report = students.map(({ name, marks }) => ({
  name,
  marks,
  grade: marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "F",
  status: marks >= 60 ? "Pass" : "Fail"
}));
console.log("Report:");
report.forEach(r => console.log(`  ${r.name}: ${r.grade} (${r.status})`));

// Check if everyone passed
console.log("All passed:", students.every(s => s.marks >= 60));

// Get names of Math students with marks > 85
let topMath = students
  .filter(s => s.subject === "Math" && s.marks > 85)
  .map(s => s.name);
console.log("Top Math students:", topMath);
