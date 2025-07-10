// ------------------------------
// What is the DOM?
// ------------------------------
/*
The DOM (Document Object Model) is a programming interface that represents
the structure of an HTML or XML document as a tree of nodes (elements).
You can use JavaScript to read, change, add, or delete elements.
*/


// HTMLCollection
// A collection of HTML elements only.

// Live: Automatically updates if the document changes.

// Returned by methods like:

// getElementsByClassName()

// getElementsByTagName()

// element.children

// js
// Copy
// Edit
// const divs = document.getElementsByTagName("div");
// console.log(divs); // HTMLCollection of <div> elements
// If you add a new <div> to the DOM after this line, divs will automatically include it.

// 🔹 NodeList
// A collection of nodes — can include elements, text, comments, etc.

// Usually static (not live), unless returned by Node.childNodes.

// Returned by methods like:

// querySelectorAll() → Static NodeList

// childNodes → Live NodeList

// js
// Copy
// Edit
// const nodes = document.querySelectorAll("p");
// console.log(nodes); // NodeList of matching <p> elements (static)
// If you add another <p> element later, nodes will not include it unless you re-run querySelectorAll.

// 🆚 Comparison Table
// Feature	HTMLCollection	NodeList
// Contains	Only HTML elements	Any DOM nodes (element, text, etc.)
// Live or Static	Live	Static (except childNodes)
// Access by index	Yes (array-like)	Yes (array-like)
// forEach method	❌ Not supported directly	✅ Supported
// Returned by	getElementsBy*, .children	querySelectorAll, childNodes


// ------------------------------
// getElementById()
// ------------------------------
const view1 = document.getElementById("view1"); // Select element with id="view1"
console.log("getElementById:", view1); // Output: <section id="view1" class="view">...</section>

// ------------------------------
// querySelector() with ID
// ------------------------------
const view2 = document.querySelector("#view2"); // Selects the first element with id="view2"
console.log("querySelector:", view2); // Output: <section id="view2" class="view">...</section>

// ------------------------------
// Changing CSS with .style
// ------------------------------
view1.style.display = "none"; // Hides view1
view2.style.display = "flex"; // Shows view2 as flexbox

// ------------------------------
// getElementsByClassName() → HTMLCollection
// ------------------------------
const views = document.getElementsByClassName("view");
console.log("getElementsByClassName (HTMLCollection):", views); // Output: HTMLCollection of elements with class="view"

// ------------------------------
// querySelectorAll() → NodeList
// ------------------------------
const sameViews = document.querySelectorAll(".view");
console.log("querySelectorAll (NodeList):", sameViews); // Output: NodeList of elements with class="view"

// ------------------------------
// getElementsByTagName()
// ------------------------------
const divsInView1 = view1.getElementsByTagName("div");
console.log("getElementsByTagName:", divsInView1); // Output: HTMLCollection of <div> elements inside view1

// ------------------------------
// querySelectorAll with nth-of-type()
// ------------------------------
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log("even divs:", evenDivs); // Every 2nd div inside view1

for (let div of evenDivs) {
  div.style.backgroundColor = "darkblue";
  div.style.width = "200px";
  div.style.height = "200px";
}

// ------------------------------
// innerHTML & textContent
// ------------------------------
const navText = document.querySelector("nav h1");
console.log("Original nav h1 text:", navText.textContent); // Output: original text
navText.textContent = "Hey World!"; // Changes only text inside the <h1>

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hey!</h1><p>This should align right.</p>`; // Replaces all inner content of <nav>


// ------------------------------
// Navigating the DOM Tree
// ------------------------------
const firstSection = document.querySelector("section"); // Let's assume it's view1
console.log("parentElement:", firstSection.parentElement); // Logs parent node
console.log("children:", firstSection.children);           // HTMLCollection of child elements (tags only)
console.log("childNodes:", firstSection.childNodes);       // NodeList (includes text, comment, etc.)

console.log("firstChild:", firstSection.firstChild);       // Might be a text node
console.log("firstElementChild:", firstSection.firstElementChild); // First child that is an element

console.log("lastChild:", firstSection.lastChild);         // Could be text node
console.log("lastElementChild:", firstSection.lastElementChild);   // Last actual element

console.log("nextSibling:", firstSection.nextSibling);     // Could be text node
console.log("nextElementSibling:", firstSection.nextElementSibling); // Next actual element

console.log("previousElementSibling:", firstSection.previousElementSibling); // Previous actual element

console.log("hasChildNodes:", firstSection.hasChildNodes()); // true or false


// ------------------------------
// Create Element, appendChild, remove
// ------------------------------
const newDiv = document.createElement("div");     // Creates new <div>
newDiv.textContent = "🚀 New Div Created!";
newDiv.style.backgroundColor = "gold";
newDiv.style.padding = "10px";

view2.appendChild(newDiv); // Appends newDiv as a child to view2

// Remove an element after 3 seconds
setTimeout(() => {
  view2.removeChild(newDiv);
  console.log("🗑️ Removed newDiv from view2");
}, 3000);


// ------------------------------
// Summary
// ------------------------------
/*
- getElementById / getElementsByClassName / getElementsByTagName: older, fast, returns HTMLCollection
- querySelector / querySelectorAll: modern, CSS-style selectors, returns NodeList
- HTMLCollection is live, NodeList is static
- innerHTML can insert HTML, textContent just sets raw text
- DOM tree navigation: parentElement, children, siblings
- Use createElement and appendChild to dynamically add elements
- removeChild or element.remove() to delete elements
*/

// ------------------------------
// End of file
// ------------------------------
