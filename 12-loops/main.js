//For Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to run each loop
// }

for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i); // prints 1 to 5
}


// While Syntax:
// while (condition) {
//     // code to run while condition is true
// }

let count = 1;
while (count <= 5) {
    console.log("While Loop Count:", count); // prints 1 to 5
    count++; // increment to avoid infinite loop
}


// do .... while Syntax:
// do {
//     // code runs at least once
// } while (condition);

let num = 1;
do {
    console.log("Do-While Loop Count:", num); // runs at least once
    num++;
} while (num <= 5);


// For...of Loop Syntax:
// Used to loop over values in an array or iterable
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit); // prints each fruit
}

// For...in Loop Syntax:
// Used to loop over object keys
let person = {
    name: "Shivam",
    age: 25,
    profession: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`); // prints key and value
}

// break and continue Keywords
// `break` exits the loop early
for (let i = 1; i <= 10; i++) {
    if (i === 6) break; // stops loop when i is 6
    console.log("Break Example:", i);
}

// `continue` skips the current iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // skips printing 3
    console.log("Continue Example:", i);
}



// Nested Loops
// Useful for working with grids, matrices, etc.
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`); // prints all combinations
    }
}