/* * * Control Structures * * */

// if/else if/else
let score = 85;

// Checks the first condition
if (score >= 90) {
    console.log("Grade: A");
} 
// Only checks this if the first one was false
else if (score >= 80) {
    console.log("Grade: B");
} 
// Runs if none of the above were true
else {
    console.log("Grade: C");
}

// Switch Statement 

let day = 3;

// The switch checks the value of 'day' against various cases
switch(day) {
    case 1:
        console.log("monday");
        break; // 'break' stops the code from checking the other cases
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4: 
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default: // 'default' runs if no cases match (like an 'else' block)
        console.log("error");
}