// ============================================================
//          15. USEFUL PATTERNS & PROGRAMS
// ============================================================

// 1. Swap variables
let a = 10, b = 20;
[a, b] = [b, a];
console.log("Swapped:", a, b);

// 2. Fibonacci
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) fib.push(fib[i-1] + fib[i-2]);
  return fib.slice(0, n);
}
console.log("Fibonacci(10):", fibonacci(10));

// 3. Factorial (recursive + iterative)
const factorialRecursive = n => n <= 1 ? 1 : n * factorialRecursive(n - 1);
const factorialIterative = n => { let r = 1; for(let i=2;i<=n;i++) r*=i; return r; };
console.log("Factorial(7):", factorialRecursive(7), factorialIterative(7));

// 4. Prime check
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}
let primes = Array.from({length: 20}, (_, i) => i+2).filter(isPrime);
console.log("Primes up to 21:", primes);

// 5. Palindrome
function isPalindrome(str) {
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
}
console.log("racecar:", isPalindrome("racecar")); // true
console.log("A man a plan a canal Panama:", isPalindrome("A man a plan a canal Panama")); // true
console.log("hello:", isPalindrome("hello")); // false

// 6. Anagram check
function isAnagram(s1, s2) {
  const sort = s => s.toLowerCase().split("").sort().join("");
  return sort(s1) === sort(s2);
}
console.log("listen/silent anagram:", isAnagram("listen", "silent")); // true

// 7. Count occurrences in array
function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}
console.log("Counts:", countOccurrences(["a","b","a","c","b","a"]));

// 8. Deep clone
const original = { name: "Alice", scores: [90, 85, 92] };
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.scores.push(99);
console.log("Original unchanged:", original.scores);
console.log("Clone modified:", deepClone.scores);

// 9. Flatten nested array
function flattenDeep(arr) {
  return arr.flat(Infinity);
}
console.log("Flattened:", flattenDeep([1, [2, [3, [4, [5]]]]]));

// 10. Remove duplicates
let dupes = [1, 2, 2, 3, 3, 3, 4];
let unique = [...new Set(dupes)];
console.log("Unique:", unique);

// 11. Debounce
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(msg => console.log("Debounced:", msg), 300);
log("first");
log("second");
log("third"); // only "third" fires after 300ms

// 12. Chunk array
function chunkArray(arr, size) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log("Chunks:", chunkArray([1,2,3,4,5,6,7], 3));

// 13. Capitalize words
const capitalizeWords = str =>
  str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
console.log(capitalizeWords("hello world from javascript"));

// 14. Random item from array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
console.log("Random fruit:", randomItem(["Apple","Banana","Mango","Grape"]));

// 15. Sleep (async pause)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function demo() {
  console.log("Start");
  await sleep(100);
  console.log("After 100ms");
}
demo();
