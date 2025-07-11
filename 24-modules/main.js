// ==========================
// 📄 main.js
// ==========================

/*
JavaScript Modules:
- A module is a file containing JS code that is isolated unless explicitly shared.
- Helps break programs into smaller, reusable files.
- Modules run in strict mode by default.
- You must use type="module" in HTML to enable ES modules.
- 'defer' is not needed — modules are deferred automatically.
*/

// ==========================
// 👉 Importing from other modules
// ==========================

import add from "./mathUtils.js"; // default import
import { subtract, multiply as mul } from "./mathUtils.js"; // named import, with alias
import * as strUtils from "./stringUtils.js"; // import all named exports from stringUtils.js

// Call the imported functions
console.log(add(10, 5));         // Output: 15 (default export from mathUtils)
console.log(subtract(10, 5));    // Output: 5 (named export)
console.log(mul(10, 5));         // Output: 50 (named export with alias)

console.log(strUtils.uppercase("hello"));   // Output: "HELLO"
console.log(strUtils.lowercase("HELLO"));   // Output: "hello"
console.log(strUtils.default);              // Output: "Default string util" (default behaves differently in import *)


// ==========================
// 📄 mathUtils.js
// ==========================

// Default export
export default function add(a, b) {
  return a + b;
}

// Named export
export function subtract(a, b) {
  return a - b;
}

// Named export (inline)
export const multiply = (a, b) => a * b;

// ==========================
// 📄 stringUtils.js
// ==========================

// Named export
export function uppercase(str) {
  return str.toUpperCase();
}

// Named export
export function lowercase(str) {
  return str.toLowerCase();
}

// Default export
const message = "Default string util";
export default message;

/*
NOTES:

- export default:
  Each module can have only ONE default export.
  Imported using: `import name from "./file.js"`

- export (named):
  Multiple named exports allowed per module.
  Imported using: `import { name } from "./file.js"`

- export inline:
  Allows exporting right at declaration (functions, consts, etc.)

- import * as obj:
  Useful when importing all named exports into a namespace object.
  Default export appears under `obj.default`

- import { name as alias }:
  Useful for renaming functions to avoid name conflicts or for clarity.
*/

// ==========================
// ✅ Summary
// ==========================

/*
- Modules improve code organization and reuse.
- HTML must use: <script type="module" src="main.js">
- Modules:
  - Are deferred
  - Use strict mode automatically
  - Are scoped (variables/functions don't leak globally)
- Use default exports for main functionality.
- Use named exports when sharing multiple utilities.
- Use import * when you want everything under one object.
*/

