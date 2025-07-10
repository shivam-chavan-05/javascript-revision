// ------------------------------
// 1. Script Tag at Bottom vs defer
// ------------------------------
/*
✅ Best practice: Load your JS after the HTML elements
Options:
1. Put <script> at the end of <body>
2. Or use <script src="main.js" defer></script> in <head>
- defer waits for DOMContentLoaded and preserves script order.
*/


// ------------------------------
// 2. DOM ready using readystatechange
// ------------------------------
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    console.log("✅ DOM fully loaded and ready");
    initApp(); // Initialize event listeners after DOM is ready
  }
};


// ------------------------------
// 3. Function to initialize app (best practice)
// ------------------------------
function initApp() {
  console.log("🚀 initApp() called");

  // ------------------------------
  // 4. Add Event Listener - click
  // ------------------------------
  const btn = document.getElementById("clickBtn");

  function handleClick(event) {
    console.log("✅ Button clicked!");
    console.log("event.target:", event.target); // The actual element that was clicked
  }

  btn.addEventListener("click", handleClick); // Adds event listener

  // Anonymous function example
  btn.addEventListener("click", function () {
    console.log("📌 Anonymous click handler");
  });

  // Remove event listener after 3 clicks
  let clickCount = 0;
  function limitedClick() {
    clickCount++;
    console.log(`Click #${clickCount}`);
    if (clickCount === 3) {
      btn.removeEventListener("click", limitedClick);
      console.log("🛑 Removed limitedClick listener");
    }
  }
  btn.addEventListener("click", limitedClick);


  // ------------------------------
  // 5. Mouse Events: mouseover and mouseout
  // ------------------------------
  const hoverBox = document.getElementById("hoverBox");

  hoverBox.addEventListener("mouseover", () => {
    hoverBox.classList.add("hovered"); // Adds class
    hoverBox.style.backgroundColor = "lightgreen";
    console.log("🟢 mouseover - classList.add()");
  });

  hoverBox.addEventListener("mouseout", () => {
    hoverBox.classList.remove("hovered"); // Removes class
    hoverBox.style.backgroundColor = "#eee";
    console.log("🔵 mouseout - classList.remove()");
  });

  // toggle example
  btn.addEventListener("dblclick", () => {
    hoverBox.classList.toggle("hovered");
    console.log("🔁 toggle .hovered class");
  });


  // ------------------------------
  // 6. Submit Event and preventDefault
  // ------------------------------
  const form = document.getElementById("testForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stops default form submission
    console.log("📨 Form submitted (prevented)");
  });


  // ------------------------------
  // 7. Event Bubbling vs Capturing
  // ------------------------------
  const outer = document.body;
  const inner = document.getElementById("clickBtn");

  // Bubbling phase (default)
  outer.addEventListener("click", () => {
    console.log("🌐 BODY clicked (bubbling)");
  });

  // Capturing phase (3rd param true)
  outer.addEventListener("click", () => {
    console.log("📣 BODY capturing");
  }, true);

  inner.addEventListener("click", (e) => {
    console.log("👉 BUTTON clicked");

    // Prevent bubbling further up
    // e.stopPropagation(); // Uncomment to test stopPropagation
  });


  // ------------------------------
  // 8. Keyboard Event Example
  // ------------------------------
  document.addEventListener("keydown", (event) => {
    console.log(`⌨️ Key pressed: ${event.key}`);
  });
}
