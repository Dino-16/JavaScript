/* * * Set and Maps * * */

// Sets - is a collection of unique values
// No duplicates allowed.
// Values can be of any type.

let numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers)

// Add values
numbers.add(5);
console.log(numbers);

// Remove values
numbers.delete(2);
console.log(numbers);

// Iterate
for(let num of numbers) {
    console.log(num);
}


// Maps - a collection of key–value pairs.
// Can be anything: objects, functions, or numbers (not just strings like in objects).
// Maintains insertion order.

let userRoles = new Map()

// Add entries
userRoles.set("Ceejay", "Admin");
userRoles.set("Alex", "Editor");
userRoles.set("Sam", "Viewer");

// Get values
console.log(userRoles.get("Ceejay"));

//Check existence
console.log(userRoles.has("Sam"));

// Remove entries
userRoles.delete("Alex");

// Iterate
for(let [user, role] of userRoles) {
    console.log(`${user} -> ${role}`);
}

// Real World Examples
// using Set to remove duplicates:

let items = ["apple", "banana", "apple", "cherry"];
let uniqueItems = new Set([...items]);
console.log(uniqueItems);

// using Map for configuration

let config = new Map([
    ["theme", "Dark"],
    ["language", "en"],
    ["notifications", true]
]);

console.log(config.get("theme"));
console.log(config.get("language"));
console.log(config.get("notifications"));