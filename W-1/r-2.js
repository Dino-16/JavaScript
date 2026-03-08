/* * * Javascript Declaring Variables  * * */

// let - Used to declare variables that can be reassigned.
let count = 1;
count =2

// const - Used to declare variables that cannot be reassigned.
const PI = 3.14159;
// PI = 3; Error: Assignment to constant variable

const user = { name: "Ceejay" };
user.name = "CJ"; // allowed

/* * * Scope in Javascript * * */

// Global scope
let globalVar = "I am global";

function test() {
    console.log(globalVar); // accessible
}

// function scope
function greet(){
    let message = "hello";
    console.log(message); // works
}
console.log(message); // error message is not defined

// Block scope
if(true) {
    let blockVar = "Inside Block";
    console.log(blockVar); // works
}
console.log(blockVar) // error