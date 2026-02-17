// Primitives

let username: string = "Arjun";
let age: number = 27;
let isAdmin: boolean = true;

//Arrays
let number: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["SomeOne", "AnyOne"];

//Tuples
let person: [string, number] = ["Arjun", 27];

//Enum
enum Color {
  Red,
  Green,
  Blue,
}
let favColor: Color.Blue = Color.Blue;

//Any (avoid when possible)
let randomValue: any = 10;
randomValue = "Arjun";
randomValue = true;

//Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that don't return)
function tell(message: string): void {
  console.log(message);
}

//Null and Undefined

let nullValue: null = null;
let undefinedValue: undefined = undefined;
