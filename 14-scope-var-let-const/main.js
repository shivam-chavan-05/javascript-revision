// =========================
// JavaScript Variables: var, let, const
// =========================

// --- 1. var ---
// var was the original way to declare variables in JS.
// It's function-scoped and allows redeclaration & re-assignment.

var a = 10;
console.log("var a (initial):", a); // 10

var a = 20; // ✅ Redeclaration allowed with var
console.log("var a (redeclared):", a); // 20

a = 30; // ✅ Re-assignment allowed
console.log("var a (re-assigned):", a); // 30


// --- 2. let ---
// let was introduced in ES6 (2015). It's block-scoped and allows re-assignment but NOT redeclaration in the same scope.

let b = 100;
console.log("let b (initial):", b); // 100

// let b = 200; ❌ Error: Identifier 'b' has already been declared (in same scope)
b = 200; // ✅ Re-assignment allowed
console.log("let b (re-assigned):", b); // 200


// --- 3. const ---
// const is block-scoped like let but does NOT allow re-assignment or redeclaration.

const c = 500;
console.log("const c:", c); // 500

// const c = 600; ❌ Error: Identifier 'c' has already been declared
// c = 600; ❌ Error: Assignment to constant variable


// =========================
// Scope: Global, Function, Block
// =========================

// --- 4. Global Scope ---
// Variables declared outside of any function or block are globally scoped.

var globalVar = "I'm global!";
let globalLet = "I'm also global!";
const globalConst = "Me too!";

console.log(globalVar);  // ✅ Accessible
console.log(globalLet);  // ✅ Accessible
console.log(globalConst); // ✅ Accessible


// --- 5. Function Scope ---
// var is function-scoped: it's only accessible within the function where it’s declared.

function demoFunctionScope() {
    var localVar = "I'm local to this function";
    let localLet = "Me too!";
    const localConst = "So am I!";
    
    console.log(localVar);   // ✅
    console.log(localLet);   // ✅
    console.log(localConst); // ✅
}

demoFunctionScope();
// console.log(localVar);   ❌ Error: localVar is not defined
// console.log(localLet);   ❌ Error
// console.log(localConst); ❌ Error


// --- 6. Block Scope ---
// let and const are block-scoped: only accessible within the { } they’re defined in.
// var is NOT block-scoped, so it “leaks” out of blocks.

if (true) {
    var blockVar = "var inside if";
    let blockLet = "let inside if";
    const blockConst = "const inside if";
    
    console.log(blockVar);   // ✅
    console.log(blockLet);   // ✅
    console.log(blockConst); // ✅
}

console.log(blockVar);   // ✅ still accessible because var is NOT block-scoped
// console.log(blockLet);   ❌ Error: blockLet is not defined
// console.log(blockConst); ❌ Error


// --- 7. Hoisting ---
// var declarations are hoisted (moved to the top of the scope) and initialized as undefined.
// let and const are also hoisted, but not initialized, causing a Temporal Dead Zone (TDZ).

console.log(hoistedVar); // ✅ undefined (var is hoisted)
var hoistedVar = "I was hoisted";

// console.log(hoistedLet); // ❌ ReferenceError (TDZ)
// let hoistedLet = "I was hoisted but in TDZ";

// console.log(hoistedConst); // ❌ ReferenceError (TDZ)
// const hoistedConst = "I was hoisted but in TDZ";


// =========================
// Summary: When to use what?
// =========================

/*
- Use `let` when the variable will change (e.g., counters, loop variables).
- Use `const` when the variable should never be reassigned (e.g., constants, config).
- Avoid `var` — it’s outdated and can lead to bugs due to function-scope and hoisting.
*/


// --- Bonus: const with objects and arrays ---
// const doesn't make the value *immutable*, it prevents re-assignment of the variable.

const person = { name: "Shivam", age: 25 };
person.age = 26; // ✅ Allowed — we're modifying the object's content
console.log(person);

// person = { name: "Someone else" }; ❌ Error: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
console.log(numbers);
