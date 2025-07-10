// main.js

// ------------------------------
// 1. Strict Mode
// ------------------------------
/*
"use strict" enforces stricter parsing and error handling in your JavaScript code.
It helps catch common mistakes like using undeclared variables.
*/

"use strict";

console.log("✅ Strict mode is ON");

// Uncommenting the next line will throw a ReferenceError in strict mode
// undeclaredVar = 10; // ❌ ReferenceError: undeclaredVar is not defined


// ------------------------------
// 2. JavaScript Errors Overview
// ------------------------------
/*
JavaScript has built-in error types:
- ReferenceError: accessing undeclared variable
- SyntaxError: code syntax is incorrect
- TypeError: invalid operation on a value (e.g., calling something that’s not a function)
*/


// ------------------------------
// 3. ReferenceError
// ------------------------------
try {
    console.log(x); // ❌ x is not defined
} catch (err) {
    console.warn("⚠️ ReferenceError caught");
    console.log("Name:", err.name);       // ReferenceError
    console.log("Message:", err.message); // x is not defined
    console.log("Stack:\n", err.stack);   // Stack trace
}


// ------------------------------
// 4. SyntaxError
// ------------------------------
/*
You can't catch a SyntaxError inside the same script context
It occurs at *parse time* not runtime

Example (don't uncomment):
eval('foo bar') // SyntaxError: Unexpected identifier
*/

try {
    eval("let a = ;"); // ❌ Invalid JS syntax string
} catch (err) {
    console.warn("⚠️ SyntaxError caught via eval()");
    console.log("Name:", err.name);       // SyntaxError
    console.log("Message:", err.message); // Unexpected token ';'
}


// ------------------------------
// 5. TypeError
// ------------------------------
try {
    const num = 42;
    num(); // ❌ num is not a function
} catch (err) {
    console.error("❌ TypeError caught");
    console.log("Name:", err.name);       // TypeError
    console.log("Message:", err.message); // num is not a function
}


// ------------------------------
// 6. throw new Error()
// ------------------------------
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result:", result);
} catch (err) {
    console.error("❌ Custom error caught from divide()");
    console.log("Name:", err.name);       // Error
    console.log("Message:", err.message); // Cannot divide by zero
}


// ------------------------------
// 7. finally block
// ------------------------------
try {
    console.log("➡️ Trying to parse JSON...");
    const obj = JSON.parse('{"name": "Shivam"}');
    console.log("✅ Parsed:", obj);
} catch (err) {
    console.error("❌ JSON parsing failed");
} finally {
    console.log("✅ finally block executed regardless of error");
}


// ------------------------------
// 8. console.warn(), console.error(), console.table()
// ------------------------------
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Shivam", age: 24 }
];

console.warn("⚠️ This is a warning message");
console.error("❌ This is an error message");
console.table(users);
/*
Output:
┌─────────┬─────────┬─────┐
│ (index) │  name   │ age │
├─────────┼─────────┼─────┤
│    0    │ 'Alice' │ 25  │
│    1    │  'Bob'  │ 28  │
│    2    │ 'Shivam'│ 24  │
└─────────┴─────────┴─────┘
*/


// ------------------------------
// Summary
// ------------------------------
/*
- Use "use strict" to catch undeclared variables.
- Understand built-in error types: ReferenceError, SyntaxError, TypeError.
- Use try-catch-finally to safely handle exceptions.
- Use throw to raise your own errors with clear messages.
- Use console.warn(), error(), and table() for debugging.
*/


// ------------------------------
// End of file
// ------------------------------
