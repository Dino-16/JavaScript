/* * * Copying vs Referencing in JavaScript * * */

// In JavaScript, objects and arrays are reference types.
// When you assign them to another variable, you’re copying the reference, not the actual data.
// Both variables point to the same memory location.
let original = { name: "John"}
let copy = original;
copy.name = "Doe";
console.log(original.name);

// Shallow copy -  shallow copy creates a new object/array, but only copies the top-level properties.

let obj = {name1: "Jane", details: {age: 12}};
let shallowCopy = { ...obj };

shallowCopy.name = "CJ"; // changes only shallowCopy
shallowCopy.details.age = 21; // changes both!

console.log(obj.details.age); // 21

// Nested objects/arrays are still referenced.
let arr = [1, 2, 3];
let shallowCopyArr = arr.slice();

shallowCopyArr[0] = 99;
console.log(arr); // [1, 2, 3] (unchanged)

// Deep Copy - A deep copy duplicates all levels of an object/array, including nested structures.
// The new object is completely independent.
let obj1 = { name: "Ceejay", details: { age: 20 } };
let deepCopy = structuredClone(obj1);

deepCopy.details.age = 25;
console.log(obj1.details.age); // 20 (unchanged)