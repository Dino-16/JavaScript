/* * * Callback * * */

// 1. First callback function
function showDashboard() {
    console.log("Welcome! Showing your dashboard now.");
}

// 2. Second callback function
function showErrorMessage() {
    console.log("Access Denied! Please log in.");
}

// 3. The "Manager" function (accepts TWO callbacks)
function checkUserStatus(isLoggedIn, successCallback, failureCallback) {
    if (isLoggedIn) {
        successCallback(); // Runs the first function
    } else {
        failureCallback(); // Runs the second function
    }
}


console.log("Starting timer...");

// setTimeout is a built-in function that takes a callback
setTimeout(function() {
    console.log("Time is up!");
}, 2000); // Waits 2000 milliseconds (2 seconds)


// 4. Execution
// We pass 'true' and the NAMES of our two functions
checkUserStatus(true, showDashboard, showErrorMessage);