/* * * Functions declarations vs expressions vs arrow functions * * */

// Function Declarations
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("John Doe"));

// Function Expressions
const greeting = function(greetings) {
    return `Hello ${greetings}`;
}

console.log(greeting("World"));

// Arrow Functions
const car = (carName) => `Car, ${carName}`;
console.log(car("Mustang"));

/* * * Real World Example * * */

// Declaration for global utility
function calculateTax(amount) {
    return amount * 0.12;
}

console.log(calculateTax(20000));

// Expression for event handling
const handleClick = function() {
    console.log("Button clicked!");
}

handleClick();

// Arrow function in array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);

console.log(doubled);