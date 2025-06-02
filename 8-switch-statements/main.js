// switch(expression) {
//   case value1:
//     // Code to run if expression === value1
//     break;
//   case value2:
//     // Code to run if expression === value2
//     break;
//   // ...more cases...
//   default:
//     // Code to run if no case matches
// }


// Example 1: Basic use case
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Tuesday":
    console.log("Second day of work.");
    break;
  case "Friday":
    console.log("Last working day!");
    break;
  default:
    console.log("It's the weekend!");
}

// Example 2: Without break (fall-through behavior)
let fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Apples are red.");
  case "Banana":
    console.log("Bananas are yellow.");
  default:
    console.log("Unknown fruit.");
}

// Output:
// Apples are red.
// Bananas are yellow.
// Unknown fruit.

// Example 3: Using numbers

let grade = 90;

switch (true) {
  case (grade >= 90):
    console.log("A grade");
    break;
  case (grade >= 80):
    console.log("B grade");
    break;
  case (grade >= 70):
    console.log("C grade");
    break;
  default:
    console.log("Needs improvement.");
}