// Nested Loop (Multiplication Table)
console.log("--- 3x3 Multiplication Table ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    process.stdout.write(`${i * j}\t`);
  }
  console.log();
}