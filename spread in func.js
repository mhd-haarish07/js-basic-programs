// Spread in function call
function addThree(a, b, c) { return a + b + c; }
let nums = [10, 20, 30];
console.log("Spread call:", addThree(...nums)); // 60