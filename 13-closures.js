// ============================================================
//          13. CLOSURES
// ============================================================

// Basic Closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// Counter with multiple methods
function makeCounter(start = 0) {
  let count = start;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { count = start; return count; },
    value()     { return count; }
  };
}

const counter = makeCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.reset());     // 10

// Closure for data privacy
function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount)  { balance += amount; console.log(`Deposited ${amount}. Balance: ${balance}`); },
    withdraw(amount) {
      if (amount > balance) { console.log("Insufficient funds!"); return; }
      balance -= amount;
      console.log(`Withdrew ${amount}. Balance: ${balance}`);
    },
    getBalance() { return balance; }
  };
}

const account = bankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
console.log("Balance:", account.getBalance());

// Closure with loop (common gotcha)
// ❌ Wrong way (all log 3)
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }

// ✅ Correct with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let closure:", i), 100);
}

// Memoization using closure
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("(from cache)");
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

function slowSquare(n) { return n * n; }
const fastSquare = memoize(slowSquare);

console.log(fastSquare(5));  // computed
console.log(fastSquare(5));  // from cache
console.log(fastSquare(10)); // computed
