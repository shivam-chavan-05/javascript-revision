// main.js

// ------------------------------
// 1. What is JSON?
// ------------------------------
/*
JSON stands for JavaScript Object Notation.
It is a lightweight data-interchange format used to store and exchange data.
JSON is language-independent but uses syntax similar to JavaScript objects.

Key rules:
- Data is in name/value pairs: "key": "value"
- Data is separated by commas
- Curly braces hold objects: { "key": "value" }
- Square brackets hold arrays: [ { ... }, { ... } ]
- Keys must be strings (in double quotes)
- Values can be strings, numbers, arrays, objects, booleans, or null
*/

// Example of a JSON object as a JavaScript string:
const jsonString = `
{
    "name": "Shivam",
    "age": 24,
    "skills": ["Python", "JavaScript", "SQL"],
    "isStudent": true
}
`;

console.log("Raw JSON string:");
console.log(jsonString);
/*
Output:
{
    "name": "Shivam",
    "age": 24,
    "skills": ["Python", "JavaScript", "SQL"],
    "isStudent": true
}
*/


// ------------------------------
// 2. JSON.parse()
// ------------------------------
/*
JSON.parse() converts a JSON-formatted string into a real JavaScript object.
*/

const parsedObject = JSON.parse(jsonString);

console.log("\nParsed JavaScript object:");
console.log(parsedObject);
/*
Output:
{
  name: 'Shivam',
  age: 24,
  skills: [ 'Python', 'JavaScript', 'SQL' ],
  isStudent: true
}
*/

// You can now access properties like a normal JS object:
console.log(parsedObject.name);        // Output: Shivam
console.log(parsedObject.skills[1]);   // Output: JavaScript


// ------------------------------
// 3. JSON.stringify()
// ------------------------------
/*
JSON.stringify() converts a JavaScript object into a JSON-formatted string.
*/

const jsObject = {
    product: "Laptop",
    brand: "Apple",
    price: 1499.99,
    inStock: true,
    specs: {
        cpu: "M3",
        ram: "16GB"
    }
};

const jsonFromObject = JSON.stringify(jsObject, null, 2); // pretty print with 2 spaces
console.log("\nJSON string from JavaScript object:");
console.log(jsonFromObject);
/*
Output:
{
  "product": "Laptop",
  "brand": "Apple",
  "price": 1499.99,
  "inStock": true,
  "specs": {
    "cpu": "M3",
    "ram": "16GB"
  }
}
*/

// Note: JSON doesn't support functions or undefined
const objWithFunc = {
    name: "Shivam",
    greet: function () {
        console.log("Hi!");
    },
    status: undefined
};

const jsonFiltered = JSON.stringify(objWithFunc);
console.log("\nJSON string from object with function/undefined:");
console.log(jsonFiltered); 
/*
Output:
{"name":"Shivam"}
Functions and undefined are skipped when stringifying
*/


// ------------------------------
// Summary
// ------------------------------
/*
- JSON is great for saving, sending, and loading structured data.
- Use JSON.parse() to turn JSON strings into JS objects.
- Use JSON.stringify() to turn JS objects into JSON strings.
- JSON can be used with APIs, localStorage, or when sending data to servers.
*/

// ------------------------------
// End of file
// ------------------------------
