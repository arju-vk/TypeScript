"use strict";
//Basic function with types
function add(a, b) {
    return a + b;
}
// Optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `&{greeting},&{name}!`;
    }
    return `Hello, &{name}! `;
}
// Default Parameters
function multiply(a, b = 1) {
    return a * b;
}
// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
//Arrow functions
const divide = (a, b) => a / b;
//Function Types
let calculate;
calculate = add;
