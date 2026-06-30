// Default Parameters
function power(base, exp = 2) {
  return Math.pow(base, exp);
}
console.log("power(3):", power(3));       // 9
console.log("power(2,10):", power(2, 10)); // 1024