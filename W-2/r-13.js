// Simple Todo 
let todos = [];

function addTask(task) {
    todos.push({ task, done: false});
}

function markDone(index) {
    if (todos[index]) {
        todos[index].done = true;
    }
} 

function removeTask(index) {
    this.tasks.splice(index, 1);
}

function listTasks() {
    return todos.map((t, i) => `${i + i}. ${t.task} [${t.done ? "Done" : "Not Done"}]`);
}

addTask("Play Valorant");
markDone(0);
console.log(listTasks());

// Simple calculator

function calculate(x, y, operator) {
    switch(operator) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*" :
            return x * y;
        case "/":
            return x / y;
    }
}

console.log(calculate(10, 5, "+"));