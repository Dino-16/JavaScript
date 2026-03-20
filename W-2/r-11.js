/* * * JSON(parse/stringify) * * */
/* JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data.
 It’s widely used in APIs, configuration files, and web applications. */

// JSON parse() - Converts a JSON string into a JavaScript object.

let jsonString = '{"name":"Ceejay","age":20,"isAdmin":true}';


let user = JSON.parse(jsonString);
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

//  Use when receiving data from an API or local storage

// JSON stringify() - Converts a JavaScript object into a JSON string

let profile = {
    name: "John",
    age: 23,
    hobby: "programming"
};

let jsonString2 = JSON.stringify(profile);
console.log(jsonString2);