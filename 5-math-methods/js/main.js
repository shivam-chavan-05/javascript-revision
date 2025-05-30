// Math Methods & Properties Practice

const num1 = 4.7;
const num2 = -4.7;

// 1. Math.PI – returns the value of π (pi)
console.log("Math.PI:", Math.PI); // 3.141592653589793
// ✅ Used in geometry and trigonometry, e.g., to calculate circle area

// 2. Math.trunc() – removes the decimal part, keeps only the integer part
console.log("Math.trunc(4.7):", Math.trunc(num1));  // 4
console.log("Math.trunc(-4.7):", Math.trunc(num2)); // -4
// ✅ Use when you just want the whole number without rounding

// 3. Math.round() – rounds to the nearest integer
console.log("Math.round(4.7):", Math.round(num1));  // 5
console.log("Math.round(-4.7):", Math.round(num2)); // -5
// ✅ Rounds up or down depending on the decimal part

// 4. Math.ceil() – always rounds UP to the nearest integer
console.log("Math.ceil(4.1):", Math.ceil(4.1));     // 5
console.log("Math.ceil(-4.1):", Math.ceil(-4.1));   // -4
// ✅ Use when you want to ensure no loss (e.g., billing systems)

// 5. Math.floor() – always rounds DOWN to the nearest integer
console.log("Math.floor(4.9):", Math.floor(4.9));   // 4
console.log("Math.floor(-4.9):", Math.floor(-4.9)); // -5
// ✅ Use when you want to ignore extra (e.g., game scores, age)

// 6. Math.pow(base, exponent) – raises a number to a power
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 (2³)
// ✅ Common for exponential calculations (e.g., compound interest)

// 7. Math.min(...values) – returns the smallest value
console.log("Math.min(1, 2, 3, -5):", Math.min(1, 2, 3, -5)); // -5
// ✅ Useful for finding lowest scores, prices, etc.

// 8. Math.max(...values) – returns the largest value
console.log("Math.max(1, 2, 3, -5):", Math.max(1, 2, 3, -5)); // 3
// ✅ Useful for finding highest scores, temperatures, etc.

// 9. Math.random() – generates a random number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random()); // Example: 0.65342
// ✅ Use in games, randomness, simulations

// 10. Generate random number between 0 and 10
let rand0to10 = Math.random() * 10;
console.log("Random (0–10):", rand0to10);

// 11. Generate random integer between 1 and 10
let rand1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random Integer (1–10):", rand1to10);
// ✅ Math.random() gives 0 to <1 → multiplying gives 0 to <10 → floor gives 0 to 9 → +1 gives 1 to 10

// 12. Generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Integer (5–15):", getRandomInt(5, 15));
// ✅ Use in games, quizzes, or any case where you want a controlled random number
