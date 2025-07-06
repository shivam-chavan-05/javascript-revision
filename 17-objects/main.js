// ==============================
// JavaScript Objects – Deep Dive
// ==============================

// --- 1. Object Basics: Keys & Values ---
const person = {
    name: "Shivam",
    age: 25,
    isStudent: true
};

console.log("Person:", person);
console.log("Name:", person.name);        // dot notation
console.log("Age:", person["age"]);       // bracket notation

// --- 2. Add/Update Properties ---
person.city = "New York";                // add new
person.age = 26;                         // update existing
console.log("Updated Person:", person);


// --- 3. Nested Objects ---
const student = {
    id: 101,
    name: "Snehal",
    address: {
        street: "123 Main St",
        city: "Boston",
        geo: {
            lat: 42.36,
            lng: -71.05
        }
    }
};

console.log("City:", student.address.city);
console.log("Latitude:", student.address.geo.lat);


// --- 4. Functions Inside Objects (Methods) ---
const car = {
    brand: "Toyota",
    model: "Camry",
    start: function () {
        console.log("Car started");
    },
    info() {
        // --- 5. 'this' keyword ---
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

car.start(); // Car started
car.info();  // Brand: Toyota, Model: Camry


// --- 6. Object.create() – Inheritance ---

const animal = {
    eats: true,
    speak() {
        console.log("Animal speaks");
    }
};

const dog = Object.create(animal); // dog inherits from animal
dog.barks = true;

console.log("Dog barks?", dog.barks);     // true
console.log("Dog eats?", dog.eats);       // inherited: true
dog.speak();                              // inherited method


// --- 7. Access Keys and Values ---

const user = {
    username: "coder123",
    level: "pro",
    score: 950
};

console.log("Keys:", Object.keys(user));     // ["username", "level", "score"]
console.log("Values:", Object.values(user)); // ["coder123", "pro", 950]
console.log("Entries:", Object.entries(user)); // [ ["username", "coder123"], ... ]


// --- 8. Loop through Object Properties ---

for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key]}`);
    }
}


// --- 9. Delete Properties ---
delete user.level;
console.log("After delete:", user);


// --- 10. hasOwnProperty() ---
console.log("Has 'score'?", user.hasOwnProperty("score")); // true
console.log("Has 'level'?", user.hasOwnProperty("level")); // false (we deleted it)


// --- 11. Destructuring Objects ---

const profile = {
    firstName: "Riya",
    lastName: "Mehta",
    country: "India"
};

const { firstName, country } = profile;
console.log("Destructured:", firstName, country);


// --- 12. Destructuring in Functions ---

// a. Destructuring inside parameters
function printUser({ username, score }) {
    console.log(`User ${username} has score ${score}`);
}

printUser({ username: "devGuy", score: 500 });

// b. Destructuring inside function body
function showLocation(user) {
    const { city, zip } = user;
    console.log(`Location: ${city} - ${zip}`);
}
showLocation({ city: "Delhi", zip: "110001" });


// --- 13. Optional Chaining (Bonus) ---
const employee = {
    name: "Arun",
    dept: {
        id: 42,
        manager: {
            name: "Priya"
        }
    }
};

console.log("Manager:", employee.dept?.manager?.name); // ✅ Priya
console.log("CEO:", employee.ceo?.name);               // ✅ undefined (no error)


// ==============================
// Summary
// ==============================

/*
✅ Use objects to store related key-value pairs.
✅ Use dot/bracket to access values.
✅ Use functions in objects for behavior.
✅ Use 'this' to access the current object inside methods.
✅ Use Object.create() for prototypal inheritance.
✅ Use for...in and Object.keys/values to explore properties.
✅ Destructure to extract variables easily.
*/

