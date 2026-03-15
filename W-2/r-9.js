/* * * Objects (properties, destructuring) * * */

// Object Properties - Properties are values associated with keys inside an object.

let user = {
    name: "John",
    age: 21,
    isAdmin: true
};

// access properties
console.log(user.name);
console.log(user.age)


// Add new property
user.email = "johndoe@gmail.com";

// update properties
user.age = 22;

delete user.isAdmin;

console.log(user);


// Object Destructuring - Destructuring allows you to extract properties into variables quickly.
let user1 = {
  name1: "Ceejay",
  age1: 20,
  role: "Developer"
};

// Destructure properties
let { name1, age1 } = user1;
console.log(name1); // "Ceejay"
console.log(age1);  // 20

// renaming variables
let { role: jobTitle } = user1;
console.log(jobTitle);

// default values
let { email = "not provided"} = user1;
console.log(email);

// Nested Destructuring - You can destructure objects inside objects.
let employee = {
  id: 101,
  profile: {
    name2: "Ceejay",
    department: "IT"
  }
};

let { profile: { name2, department } } = employee;
console.log(name2);       // "Ceejay"
console.log(department); // "IT"

// Real World Usage

// Function parameters with destructuring:
function greet({name4, age4}) {
    console.log(`Hello ${name4}, age ${age4}`);
}

greet({ name4: "Bob", age4: 11});

// Extracting API response data:
let response = {
    status1: 200,
    data: { user5: "Sponge", loggedIn: true }
};

let { status1, data: { user5, loggedIn }} = response;
console.log(status1, user5, loggedIn);