//Basic function with types
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `&{greeting},&{name}!`;
  }
  return `Hello, &{name}! `;
}

// Default Parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

//Arrow functions
const divide = (a: number, b: number): number => a / b;

//Function Types
let calculate: (x: number, y: number) => number;
calculate = add;
