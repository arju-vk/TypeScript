"use strict";
// Primitives
let username = "Arjun";
let age = 27;
let isAdmin = true;
//Arrays
let number = [1, 2, 3, 4, 5];
let names = ["SomeOne", "AnyOne"];
//Tuples
let person = ["Arjun", 27];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favColor = Color.Blue;
//Any (avoid when possible)
let randomValue = 10;
randomValue = "Arjun";
randomValue = true;
//Unknown (safer than any)
let userInput;
userInput = 5;
userInput = "text";
// Void (for functions that don't return)
function tell(message) {
    console.log(message);
}
//Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
