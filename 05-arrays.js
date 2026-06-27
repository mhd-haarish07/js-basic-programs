// ============================================================
//          5. ARRAYS
// ============================================================

let numbers = [10, 20, 30, 40, 50];

// Basic access
console.log("Array:", numbers);
console.log("Length:", numbers.length);
console.log("First:", numbers[0]);
console.log("Last:", numbers[numbers.length - 1]);

// Add / Remove
numbers.push(60);         // Add to end
numbers.unshift(0);       // Add to start
numbers.pop();            // Remove from end
numbers.shift();          // Remove from start
console.log("Modified:", numbers);

// splice (add/remove at index)
numbers.splice(2, 1);          // Remove 1 element at index 2
numbers.splice(1, 0, 15);      // Insert 15 at index 1
console.log("After splice:", numbers);

// slice (copy portion)
console.log("Slice:", numbers.slice(1, 3));

// map, filter, reduce
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

let total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Total:", total);

// find, findIndex, indexOf, includes
console.log("Find >25:", numbers.find(n => n > 25));
console.log("FindIndex >25:", numbers.findIndex(n => n > 25));
console.log("IndexOf 30:", numbers.indexOf(30));
console.log("Includes 40:", numbers.includes(40));

// sort
let arr = [5, 3, 8, 1, 9];
arr.sort((a, b) => a - b);
console.log("Ascending:", arr);
arr.sort((a, b) => b - a);
console.log("Descending:", arr);

// every, some
console.log("All > 0:", arr.every(n => n > 0));   // true
console.log("Some > 8:", arr.some(n => n > 8));   // true

// flat, flatMap
let nested = [[1, 2], [3, [4, 5]]];
console.log("Flat:", nested.flat(2));
console.log("FlatMap:", [[1,2],[3,4]].flatMap(x => x));

// Spread & Destructuring
let a1 = [1, 2, 3], a2 = [4, 5, 6];
let combined = [...a1, ...a2];
console.log("Combined:", combined);

let [first, second, ...rest] = combined;
console.log("Destructured:", first, second, rest);

// Array.from
console.log("Array.from:", Array.from("hello"));
console.log("Array.from range:", Array.from({length: 5}, (_, i) => i + 1));
