/* * * Operators * * */

// Arithmetic
let x = 10;
let y = 5;

console.log(x + y); // addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division
console.log(x % y); // modulo
console.log(x ** y); // exponentiation

// Assignment 
a += 2; // a = a + 2 → 7
a -= 1; // a = a - 1 → 6
a *= 3; // a = a * 3 → 18
a /= 2; // a = a / 2 → 9

/* * * Comparison * * */

// Equality
console.log(5 == "5");    // true  (Abstract: Converts types to match)
console.log(5 === "5");   // false (Strict: Different types - number vs string)

// Inequality
console.log(5 != "5");    // false (Abstract: They are considered equal)
console.log(5 !== "5");   // true  (Strict: They are technically different)

//Relational
console.log(3 < 5);       // true  (Less than)
console.log(7 > 10);      // false (Greater than)
console.log(5 <= 5);      // true  (Less than or equal to)
console.log(6 >= 4);      // true  (Greater than or equal to)