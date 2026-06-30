function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4, 5)); // 15
