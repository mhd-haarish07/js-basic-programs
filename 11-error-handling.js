// ============================================================
//          11. ERROR HANDLING
// ============================================================

// Basic try/catch/finally
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}

try {
  console.log(divide(10, 2));   // 5
  console.log(divide(10, 0));   // throws
} catch (err) {
  console.log("Caught:", err.message);
} finally {
  console.log("Finally always runs.");
}

// Custom Error Classes
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

function validateAge(age) {
  if (typeof age !== "number") throw new ValidationError("Age must be a number");
  if (age < 0 || age > 120) throw new ValidationError("Age out of range");
  return true;
}

try {
  validateAge("twenty");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation Error:", err.message);
  } else {
    console.log("Unknown Error:", err.message);
  }
}

// Error types
try { null.property; }      catch(e) { console.log("TypeError:", e.constructor.name); }
try { eval("{"); }          catch(e) { console.log("SyntaxError:", e.constructor.name); }
try { undeclaredVar; }      catch(e) { console.log("ReferenceError:", e.constructor.name); }

// Safe JSON parse
function safeJSONParse(str) {
  try {
    return { data: JSON.parse(str), error: null };
  } catch {
    return { data: null, error: "Invalid JSON" };
  }
}

console.log(safeJSONParse('{"name":"Alice"}'));
console.log(safeJSONParse("not json"));
