// Syntax ---> condition ? expressionIfTrue : expressionIfFalse

// Simple condition check
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);  // Output: "Adult"

// Shorter replacement for if...else
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome!" : "Please log in.");  // Output: "Welcome!"

// Inside a function return
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));   // "$2.00"
console.log(getFee(false));  // "$10.00"


// Nested ternary operations
let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
console.log(grade);  // Output: "B"
