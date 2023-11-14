// For Loop
// A for loop is used to execute a block of code a specific number of times.
// Syntax: for (initialization; condition; increment/decrement) { code block to be executed }

// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2: Iterate over an array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// While Loop
// A while loop is used to execute a block of code as long as the condition is true.
// Syntax: while (condition) { code block to be executed }

// Example 1: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example 2: Iterate over an array
const colors = ['red', 'green', 'blue'];
let j = 0;
while (j < colors.length) {
    console.log(colors[j]);
    j++;
}

// Do-While Loop
// A do-while loop is used to execute a block of code at least once, and then repeats the loop as long as the condition is true.
// Syntax: do { code block to be executed } while (condition);

// Example 1: Print numbers from 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Example 2: Iterate over an array
const animals = ['cat', 'dog', 'bird'];
let l = 0;
do {
    console.log(animals[l]);
    l++;
} while (l < animals.length);

// Break Statement
// The break statement is used to terminate a loop.
// Syntax: break;

// Example: Print numbers from 1 to 5, but break the loop when i is equal to 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// Continue Statement
// The continue statement is used to skip an iteration of a loop.
// Syntax: continue;

// Example: Print numbers from 1 to 5, but skip the iteration when i is equal to 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
