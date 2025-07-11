// ==========================
// Introduction to Web Storage API
// ==========================

/*
Web Storage API allows websites to store key-value data in the browser.
It includes two types of storage:

1. localStorage:
   - Stores data with no expiration.
   - Data persists even after the browser is closed or the system restarts.
   - Ideal for things like user preferences, dark mode settings, etc.

2. sessionStorage:
   - Stores data for a single browser session.
   - Data is cleared when the tab or browser is closed.
   - Ideal for temporary state, like form progress or session-specific data.
*/

// ==========================
// Global `window` object
// ==========================

/*
The window object is the global object in the browser.
All browser APIs (like alert, location, localStorage) are part of `window`.

Examples:
*/
alert("This is from the global window object!"); // Shows an alert box

console.log(window.location.href); // Logs the current URL

// You can also access storage via window.localStorage or window.sessionStorage
console.log(window.localStorage === localStorage); // true


// ==========================
// localStorage Examples
// ==========================

// Store a value
localStorage.setItem("username", "Shivam");
console.log(localStorage.getItem("username")); // Output: Shivam

// Store a number (stored as string)
localStorage.setItem("age", 28);
console.log(localStorage.getItem("age")); // Output: "28" (as a string)

// Remove a specific item
localStorage.removeItem("username");
console.log(localStorage.getItem("username")); // Output: null

// Store complex data using JSON
const user = {
  name: "Shivam",
  role: "Developer",
  skills: ["JS", "Python", "SQL"]
};

// Convert object to string before storing
localStorage.setItem("userData", JSON.stringify(user));

// Retrieve and parse it
const retrievedUser = JSON.parse(localStorage.getItem("userData"));
console.log(retrievedUser.name); // Output: Shivam

// Get length of stored items
console.log(localStorage.length); // Output: 2 (age + userData)

// Access key by index
console.log(localStorage.key(0)); // Might output "age" or "userData"

// Clear all localStorage
// localStorage.clear(); // Uncomment this line to clear everything


// ==========================
// sessionStorage Examples
// ==========================

sessionStorage.setItem("sessionID", "xyz-123");
console.log(sessionStorage.getItem("sessionID")); // Output: xyz-123

// Remove session item
sessionStorage.removeItem("sessionID");
console.log(sessionStorage.getItem("sessionID")); // Output: null

// sessionStorage is cleared when the tab is closed
sessionStorage.setItem("cart", JSON.stringify(["item1", "item2"]));

const cart = JSON.parse(sessionStorage.getItem("cart"));
console.log(cart.length); // Output: 2


// ==========================
// Persistent vs Session Data – When to Use
// ==========================

/*
Use localStorage when:
- You want to save data even after browser restarts.
- Examples: Theme preference, login remember me, last visited page.

Use sessionStorage when:
- Data is relevant only for the current tab or session.
- Examples: Step-by-step form input, temp session ID.

Use JSON when:
- You want to store complex data types like objects or arrays.
- localStorage/sessionStorage only store strings.
- So we use JSON.stringify() to store, and JSON.parse() to retrieve.
*/

// ==========================
// Summary:
// ==========================

/*
Key Methods:
- setItem(key, value)
- getItem(key)
- removeItem(key)
- clear()
- key(index)
- length (property)

Web Storage only stores **strings**, so use JSON for arrays/objects.
*/

