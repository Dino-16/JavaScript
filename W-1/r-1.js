/* * * Javascript Value Types * * */

// Primitive Types - immutable, directly represent a single value

typeof "Hello"; // string - Text data enclosed in quotes (single, double, or backticks for template literals).
typeof 42; // number - Represents both integers and floating-point numbers.
typeof true; //boolean - Logical values used for conditions(true or false).
typeof null; // null - Explicitly represents "no value" or "empty".
typeof undefined; // undefined - A variable declared but not assigned a value.
typeof Symbol(); // symbol - Unique and immutable identifiers, often used as object keys.
typeof 123n; // bigint - Represents integers larger than Number.MAX_SAFE_INTEGER.

// String
let greeting = "Hello";
console.log(typeof greeting); // "string"

// Number
let age = 42;
console.log(typeof age); // "number"

// Boolean
let isActive = true;
console.log(typeof isActive); // "boolean"

// Null
let emptyValue = null;
console.log(typeof emptyValue); // "object" (quirk in JS!)

// Undefined
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

/* * * Sample Usage in Real Scenarios * * */

// checking variable type before operations
function addNumbers(a, b) {
    if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return "Both inputs must be numbers!";
}

console.log(addNumbers(12, 13));
console.log(addNumbers("5", 10));

// handling optional values
let userInput;

if(typeof userInput === "undefined") {
    console.log("No input provided.");
}

// Using Symbol as unique object keys
const id = Symbol("id");
const user = {
    [id]: 101,
    name: "John"
};

console.log(user[id]);

// Working with Bigint for large numbers
let big1 = 23147602134823424n;
let big2 = 10n;
console.log(big1 + big2);
