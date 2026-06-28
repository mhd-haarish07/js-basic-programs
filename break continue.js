// Break & Continue
console.log("--- Break & Continue ---");
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  if (i % 2 === 0) continue;
  console.log(i);  // prints 1, 3, 5
}