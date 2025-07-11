// ==========================
// 📘 What are Higher-Order Functions (HOFs)?
// ==========================

/*
A Higher-Order Function is a function that does either or both of the following:
1. Takes another function as an argument.
2. Returns a function as its result.

In JavaScript, array methods like forEach, map, filter, and reduce are common examples of HOFs.
They allow writing cleaner, more expressive, and often more concise code for working with collections (arrays).
*/


// ==========================
// 🔁 forEach()
// ==========================

/*
forEach() is used to perform an action on each element of an array.
Use it when:
- You want to *do something* for every element (e.g., print it)
- But you don't need a returned array (forEach returns `undefined`)
*/

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
// Output:
// 1: apple
// 2: banana
// 3: cherry

// Not ideal if you want to build a new array from this.
// For that, use map or filter instead.


// ==========================
// 🔎 filter()
// ==========================

/*
filter() returns a new array containing elements that pass a test.
The original array remains unchanged.
*/

const numbers = [1, 2, 3, 4, 5, 6];

// Get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6]

// Filter numbers greater than 3
const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree); // Output: [4, 5, 6]


// ==========================
// 🧭 map()
// ==========================

/*
map() creates a new array by transforming every element in the original array.
Each element is passed through a callback, and the result is stored in the new array.
*/

const squares = numbers.map(n => n * n);
console.log(squares); // Output: [1, 4, 9, 16, 25, 36]

// You can also extract or transform objects
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 }
];

const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob"]


// ==========================
// 🧮 reduce()
// ==========================

/*
reduce() applies a function against an accumulator and each element in the array to reduce it to a single value.

Syntax:
arr.reduce((accumulator, currentValue) => ..., initialValue)
*/

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 21

// You can use it to count things too
const sentence = "hello world";
const charCount = sentence.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(charCount);
// Example Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }


// ==========================
// ✅ Summary
// ==========================

/*
Use:
- forEach() when you want to *do something* with each item, not return anything.
- filter() when you want a *subset* of the array.
- map() when you want to *transform* every element into a new array.
- reduce() when you want to *accumulate* a result (sum, object, string, etc.) from all elements.

All of them are examples of Higher-Order Functions because they take functions as arguments.
*/
