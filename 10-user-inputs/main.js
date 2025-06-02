// =========================
// ALERT
// =========================
// The alert() function displays a message in a popup box with an "OK" button.
// It is typically used to notify or warn the user.
// It does not take any user input and does not return any value.
alert("Welcome to the JavaScript User Input Demo!");

// =========================
// CONFIRM
// =========================
// The confirm() function displays a dialog box with "OK" and "Cancel" buttons.
// It returns a boolean value: true if the user clicks "OK", false if "Cancel".
let userConfirmed = confirm("Do you want to continue?");

// We can use this return value to make decisions
if (userConfirmed) {
  alert("You chose to continue.");
} else {
  alert("You canceled the operation.");
}

// =========================
// PROMPT
// =========================
// The prompt() function displays a dialog box that asks the user for input.
// It shows a text box with "OK" and "Cancel" buttons.
// Returns a string with the user's input, or null if the user presses Cancel.
let userName = prompt("What is your name?");

// Check what was entered
if (userName !== null) {
  alert("Hello, " + userName + "!");
} else {
  alert("You didn't enter your name.");
}

// =========================
// NULLISH COALESCING OPERATOR (??)
// =========================
// The ?? operator returns the right-hand value if the left-hand value is null or undefined.
// It is useful for assigning default values when input is missing.
let city = prompt("Enter your city:") ?? "Unknown City";

// If the user presses Cancel, city will be "Unknown City"
alert("Your city is: " + city);



