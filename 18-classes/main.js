// main.js

// ------------------------------
// 1. Constructor, this, method, new, parameter
// ------------------------------
class Person {
    constructor(name, age) {
        // Constructor initializes object properties
        this.name = name;
        this.age = age;
    }

    greet() {
        // Method that uses 'this' to access properties
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 25); // Creating an instance using 'new'
person1.greet(); // Output: Hi, I'm Alice and I'm 25 years old.


// ------------------------------
// 2. Log a specific property and change it using dot notation
// ------------------------------
console.log(person1.name); // Output: Alice
person1.name = "Alicia"; // Changing the value using dot notation (not recommended for private fields)
console.log(person1.name); // Output: Alicia


// ------------------------------
// 3. Getter and Setter
// ------------------------------
class User {
    constructor(username) {
        this._username = username; // Naming convention: underscore for private-ish fields
    }

    get username() {
        // Getter method
        console.log("Getting username...");
        return this._username;
    }

    set username(value) {
        // Setter method with validation
        if (value.length < 3) {
            console.log("Username too short.");
            return;
        }
        console.log("Setting username...");
        this._username = value;
    }
}

const user1 = new User("john");
console.log(user1.username); // Getting username... Output: john
user1.username = "jo";       // Username too short.
user1.username = "johndoe";  // Setting username...
console.log(user1.username); // Getting username... Output: johndoe

// Why use getters/setters?
// - Add validation
// - Control access to internal properties
// - Maintain encapsulation


// ------------------------------
// 4. Super class (Parent class), extends, child class, super
// ------------------------------
class Animal {
    constructor(species) {
        this.species = species;
    }

    makeSound() {
        console.log(`${this.species} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog"); // Call parent class constructor
        this.name = name;
    }

    bark() {
        console.log(`${this.name} says: Woof!`);
    }

    makeSound() {
        super.makeSound(); // Call parent method
        console.log(`${this.name} is barking.`);
    }
}

const myDog = new Dog("Rex");
myDog.bark();           // Rex says: Woof!
myDog.makeSound();      // Dog makes a sound. Rex is barking.


// ------------------------------
// 5. Factory function
// ------------------------------
function createCar(make, model) {
    return {
        make,
        model,
        drive() {
            console.log(`${make} ${model} is driving.`);
        }
    };
}

const car1 = createCar("Toyota", "Corolla");
car1.drive(); // Output: Toyota Corolla is driving.

// Factory function vs Class:
// - Factory functions are simpler and more flexible
// - Classes offer inheritance, private fields, and better structure for complex objects


// ------------------------------
// 6. Public and Private Fields (#)
// ------------------------------
class BankAccount {
    #balance; // private field
    constructor(owner, initialBalance) {
        this.owner = owner;        // public field
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;      // Accessing private field inside class
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        }
    }
}

const account = new BankAccount("Shivam", 1000);
console.log(account.owner);        // Output: Shivam
console.log(account.getBalance()); // Output: 1000
account.deposit(500);              // Output: Deposited 500. New balance: 1500

// Trying to access private field from outside throws error
// console.log(account.#balance);  // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class


// Summary of naming conventions:
// - _underscore: implies "private", not enforced (legacy convention)
// - #hash: truly private, enforced by JS


// ------------------------------
// End of file
// ------------------------------
