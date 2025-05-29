console.log("Shivam");
console.log(typeof "Shivam");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof false);
let myVariable;

console.log(typeof myVariable);
myVariable = 42;
console.log(typeof myVariable);
myVariable = "Shivam";
console.log(typeof myVariable);
let myNumber = 10;
console.log(myNumber * 2, myNumber + 2, myNumber - 2, myNumber / 2);

// Concatenation
console.log(myNumber + myVariable);
let myCombo = myNumber + myVariable
console.log(typeof myCombo);

// Boolean Comparisons Operations, == (Compares value after type conversion) and === (Compares both value and type, No type conversion)
console.log(10 == '10'); // true
console.log(10 === '10'); // false
console.log(10 == 20); // false

let myBool = myNumber === 10;
console.log(myBool); // true

console.log(myNumber !== 10);
console.log(myNumber > 5); 
alert("This is an alert box!");