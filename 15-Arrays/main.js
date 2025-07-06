// =======================
// JavaScript Arrays – Deep Dive
// =======================

// --- 1. Declaring and Accessing Arrays ---

let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);

// Access by index
console.log("First fruit:", fruits[0]); // apple
console.log("Length:", fruits.length); // 3

// Change an element (update)
fruits[1] = "blueberry";
console.log("Updated Fruits:", fruits);


// --- 2. Add Elements ---

// push() – Adds to the end
fruits.push("date");
console.log("After push:", fruits); // ["apple", "blueberry", "cherry", "date"]

// unshift() – Adds to the beginning
fruits.unshift("avocado");
console.log("After unshift:", fruits); // ["avocado", "apple", ...]


// --- 3. Remove Elements ---

// pop() – Removes from end
let popped = fruits.pop();
console.log("Popped:", popped);
console.log("After pop:", fruits);

// shift() – Removes from beginning
let shifted = fruits.shift();
console.log("Shifted:", shifted);
console.log("After shift:", fruits);


// --- 4. Deleting Specific Elements ---

// delete – NOT recommended; leaves an empty slot (undefined)
delete fruits[1];
console.log("After delete (bad):", fruits); // [ "apple", undefined, "cherry" ]

// splice() – Best way to add/remove at any index
// syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2); // remove 2 items starting from index 1
console.log("After splice (remove):", fruits); // ["apple", "date"]

fruits.splice(1, 0, "kiwi", "mango"); // insert without removing
console.log("After splice (insert):", fruits); // ["apple", "kiwi", "mango", "date"]


// --- 5. slice() – Copy part of an array (non-destructive)
let sliced = fruits.slice(1, 3); // from index 1 to 2
console.log("Sliced:", sliced); // ["kiwi", "mango"]
console.log("Original after slice:", fruits); // unchanged


// --- 6. reverse() – Reverses the array in-place
fruits.reverse();
console.log("Reversed:", fruits);


// --- 7. join() – Converts array to string
let joined = fruits.join(" - ");
console.log("Joined:", joined); // e.g., "date - mango - kiwi - apple"


// --- 8. split() – String method, turns string into array
let sentence = "hello world this is JavaScript";
let words = sentence.split(" ");
console.log("Split words:", words);


// --- 9. concat() – Combine arrays
let veg = ["carrot", "spinach"];
let combo = fruits.concat(veg);
console.log("Concat result:", combo);


// --- 10. Spread Operator (...) – Modern way to copy/merge arrays
let copiedFruits = [...fruits];
let allItems = [...fruits, ...veg];
console.log("Copied Fruits:", copiedFruits);
console.log("All Items:", allItems);


// =======================
// Nested Arrays
// =======================

// --- 11. 1D Array ---
let numbers1D = [10, 20, 30];
console.log("1D Array:", numbers1D);

// --- 12. 2D Array (Matrix) ---
let matrix2D = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log("2D Array:", matrix2D);
console.log("Element at [1][0]:", matrix2D[1][0]); // 3

// --- 13. 3D Array ---
let matrix3D = [
  [
    [1, 2], [3, 4]
  ],
  [
    [5, 6], [7, 8]
  ]
];
console.log("3D Array:", matrix3D);
console.log("Element at [1][0][1]:", matrix3D[1][0][1]); // 6

// Modify a value in 2D array
matrix2D[2][1] = 60;
console.log("Modified 2D array:", matrix2D);


// =======================
// Extra: Useful Array Checks & Loops
// =======================

// Array.isArray() – check if something is an array
console.log("Is fruits an array?", Array.isArray(fruits)); // true

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits[${i}] = ${fruits[i]}`);
}

// forEach
fruits.forEach((item, idx) => {
    console.log(`Index ${idx}: ${item}`);
});

// map – transform each item
let upperFruits = fruits.map(f => f.toUpperCase());
console.log("Uppercase Fruits:", upperFruits);

