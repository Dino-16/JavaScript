/* * * Promise * * */

// Create a new Promise object
// A Promise represents a value that may be available now, or in the future, or never
const myPromise = new Promise((resolve, unresolve) => {
    const success = true; // Simulate a condition to determine if the promise resolves or rejects

    if(success) {
        // If the condition is true, the promise is resolved with a value
        resolve("It is resolved!");
    } else {
        // If the condition is false, the promise is rejected with an error message
        unresolve("It is not resolved");
    }
});

// Consume the promise
myPromise
    .then((data) => {
        // The .then() method is called when the promise is resolved
        console.log(data); // Logs the resolved value
    })
    .catch((error) => {
        // The .catch() method is called when the promise is rejected
        console.error(error); // Logs the error message
    })
    .finally(() => {
        // The .finally() method is called regardless of whether the promise is resolved or rejected
        console.log("Process finished."); // Logs a message indicating the process is complete
    });