// Function Declaration
function greet(name) {
  // This block is the function body
  console.log("Hello, " + name + "!");
}

// Calling the function with an argument
greet("Shivam"); // Output: Hello, Shivam!

//-------------------------------------------------------------------------

// Function Expression (Named)
const sayHi = function hello(name) {
  console.log("Hi, " + name + "!");
};

sayHi("Snehal"); // Output: Hi, Snehal!

//-------------------------------------------------------------------------

// Anonymous function stored in a variable
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// Anonymous function used as a callback
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);

//-------------------------------------------------------------------------

// Arrow function with two parameters
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 5)); // Output: 20

// Arrow function with one parameter (no parentheses needed)
const square = x => x * x;

console.log(square(6)); // Output: 36

// Arrow function with no parameters
const sayHello = () => {
  console.log("Hello!");
};

sayHello(); // Output: Hello!

//-------------------------------------------------------------------------

/* Immediately Invoked Function Expression (IIFE)
A function that runs immediately after being defined.
Used to create a private scope.
*/
(function() {
  console.log("IIFE is running");
})(); // Output: IIFE is running

// Can also be written using arrow functions
(() => {
  console.log("Arrow IIFE is running");
})(); // Output: Arrow IIFE is running

//-------------------------------------------------------------------------

// Returning Values from a Function
function subtract(a, b) {
  return a - b; // Return sends the result back to where the function is called
}

const result = subtract(10, 4);
console.log(result); // Output: 6
//-------------------------------------------------------------------------

// Default Parameters
function greetUser(name = "Guest") {
  console.log("Welcome, " + name);
}

greetUser();        // Output: Welcome, Guest
greetUser("Shivam"); // Output: Welcome, Shivam


//-------------------------------------------------------------------------

// Functions as Parameters (Callback Functions)
function processUserInput(callback) {
  const name = "Snehal";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hi " + name);
}); // Output: Hi Snehal


//-------------------------------------------------------------------------
// Function Scope
function outerFunction() {
  const outerVar = "I’m outside!";

  function innerFunction() {
    console.log(outerVar); // inner function can access outer variable
  }

  innerFunction();
}

outerFunction(); // Output: I’m outside!

