// 13. Capitalize words
const capitalizeWords = str =>
  str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
console.log(capitalizeWords("hello world from javascript"));