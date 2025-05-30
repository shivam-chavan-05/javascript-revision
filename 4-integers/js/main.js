// Numbers Practice

const num = 42.567;
const intStr = "123";
const floatStr = "123.456abc";
const invalidStr = "abc123";

// 1. Original number
console.log(num); // 42.567

// 2. Convert number to string
console.log(num.toString()); // "42.567"

// 3. Convert string to integer using Number method
console.log(Number.parseInt(intStr)); // 123

// 4. Convert string to float (extracts numeric part) using Number method
console.log(Number.parseFloat(floatStr)); // 123.456

// 5. Rounding (to fixed decimal places)
console.log(num.toFixed(2)); // "42.57"

// 6. Check if a number is an integer
console.log(Number.isInteger(num)); // false
console.log(Number.isInteger(100)); // true

// 7. Check if a value is NaN (Not a Number)
console.log(Number.isNaN("hello")); // false – "hello" is a string, not NaN
console.log(Number.isNaN(NaN));     // true – strict check for NaN

// ✅ Difference between isNaN() vs Number.isNaN():
// isNaN("hello") → true (global, coercion to NaN)
// Number.isNaN("hello") → false (strict, no coercion)

console.log(isNaN("123abc")); // true – coerces to NaN
console.log(Number.isNaN("123abc")); // false – it's a string, not NaN

// 8. Convert string to number explicitly
console.log(Number("42"));   // 42
console.log(Number("42.5")); // 42.5
console.log(Number("abc"));  // NaN

// 9. Check type
console.log(typeof num);             // "number"
console.log(typeof num.toString());  // "string"
