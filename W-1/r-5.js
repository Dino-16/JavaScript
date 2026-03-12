/* * * Loops * * */

// For Loop: Runs for a specific range (0 to 10)
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

// While Loop: Runs as long as the condition is true
let a = 0;
while(a <= 5) {
    console.log(a);
    a++; // Increment to avoid infinite loop
}

// For...of Loop: Iterates through every item in an array
let fruits = ["banana", "orange", "apple"];
for (let fruit of fruits) {
    console.log(fruit); // Logs each element automatically
}