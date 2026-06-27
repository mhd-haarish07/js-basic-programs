// ============================================================
//          12. PROMISES & ASYNC/AWAIT
// ============================================================

// Creating a Promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Alice", email: "alice@example.com" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

// .then() / .catch() / .finally()
console.log("--- Promise Chain ---");
fetchUser(1)
  .then(user => {
    console.log("User found:", user.name);
    return user.email;
  })
  .then(email => console.log("Email:", email))
  .catch(err => console.log("Error:", err.message))
  .finally(() => console.log("Promise done."));

// Async/Await
console.log("--- Async/Await ---");
async function getUser(id) {
  try {
    const user = await fetchUser(id);
    console.log("Async user:", user.name);
  } catch (err) {
    console.log("Async error:", err.message);
  }
}
getUser(1);
getUser(-1);

// Promise.all (run in parallel, wait for all)
async function getAllUsers() {
  try {
    const [u1, u2, u3] = await Promise.all([
      fetchUser(1),
      fetchUser(2),
      fetchUser(3),
    ]);
    console.log("All users:", u1.name, u2.name, u3.name);
  } catch (err) {
    console.log("One failed:", err.message);
  }
}
getAllUsers();

// Promise.allSettled (wait for all, even if some fail)
async function allSettled() {
  const results = await Promise.allSettled([fetchUser(1), fetchUser(-1)]);
  results.forEach(r => {
    if (r.status === "fulfilled") console.log("Fulfilled:", r.value.name);
    else console.log("Rejected:", r.reason.message);
  });
}
allSettled();

// Promise.race (first to resolve wins)
async function raceDemo() {
  const winner = await Promise.race([
    new Promise(res => setTimeout(() => res("Fast"), 100)),
    new Promise(res => setTimeout(() => res("Slow"), 500)),
  ]);
  console.log("Race winner:", winner); // "Fast"
}
raceDemo();
