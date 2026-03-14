/* * * Arrays (push/pop/map/filter/reduce) * * */

// push - Adds an element to the end of an array.
let fruits = ["Banana", "Apple"];
fruits.push("Orange");
console.log(fruits);

// pop - Removes the last element from an array and returns it.
let cars = ["BMW", "TOYOTA", "HONDA"];
lastCar = cars.pop();
console.log(cars);

// map - Creates a new array by applying a function to each element.
let numbers = [1, 2];

doubleNumbers = numbers.map(number =>  number * 2 );
console.log(doubleNumbers);

// filter - Creates a new array with elements that pass a condition.
let numbers2 = [1, 2, 3, 4, 5];
let evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce - Reduces an array to a single value by applying a function cumulatively.
let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce((acc, num) => acc + num);
console.log(sum);