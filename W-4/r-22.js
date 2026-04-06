/* * * Async and Await * * */

// The 'wait' function is a utility that returns a Promise, which resolves after a specified time (ms).
// This simulates a delay, allowing us to mimic asynchronous operations like waiting for a machine process.
const wait = (ms) => new Promise(res => setTimeout(res, ms));

// The 'makeCoffee' function is an asynchronous function that simulates the process of making coffee step-by-step.
// Each step uses 'await' to pause execution until the corresponding Promise (from 'wait') resolves.
async function makeCoffee() {
    console.log("Machine: Ready to brew.");

    try {
        // Step 1: Simulate grinding beans with a 2-second delay.
        console.log("1. Grinding beans...");
        await wait(2000);
        console.log("Beans ground!");

        // Step 2: Simulate heating water with a 3-second delay.
        console.log("2. Heating water");
        await wait(3000);
        console.log("Water is hot");

        // Step 3: Simulate pouring coffee with a 1-second delay.
        console.log("3. Pouring coffee");
        await wait(1000);

        // Final step: Indicate that the coffee is ready.
        console.log("Done! Enjoy your drink");
    } catch(error) {
        // Handle any errors that occur during the process.
        console.log("Error: The machine is jammed");
    }
}

// Call the 'makeCoffee' function to start the coffee-making process.
makeCoffee();

// This log demonstrates that the system remains responsive while 'makeCoffee' runs asynchronously.
console.log("SYSTEM: The 'Cancel' button is still active and clickable!");