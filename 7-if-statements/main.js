// if Statements – Control Flow in JavaScript

const age = 20;

// Basic if statement
if (age >= 18) {
  console.log("You are an adult.");
} 

// if...else
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}

// if...else if...else for multiple conditions
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}


// Template Literals – Dynamic Strings with ${}

const name = "Shivam";
const language = "JavaScript";

// Old way using +
console.log("Hello, my name is " + name + " and I love " + language + ".");

// New way using template literals
console.log(`Hello, my name is ${name} and I love ${language}.`);


// Example using Both Together

const score = 85;
const grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";

if (score >= 90) {
  console.log(`Excellent work, ${name}! You got an A.`);
} else if (score >= 75) {
  console.log(`Good job, ${name}! You got a B.`);
} else {
  console.log(`Keep trying, ${name}. You got a C.`);
}
