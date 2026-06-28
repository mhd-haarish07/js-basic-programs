// Callback Function
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log("Callback add:", applyOperation(5, 3, (a, b) => a + b));
console.log("Callback mul:", applyOperation(5, 3, (a, b) => a * b));