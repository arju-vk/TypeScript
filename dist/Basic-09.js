"use strict";
//Type Assertions
let someValue = "I don't know ";
let strLength = someValue.length;
//Or
let strLength2 = someValue.length;
//Type Guards
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
//Instance of type guard
class Dog {
    bark() {
        console.log("Woof !");
    }
}
class Cat {
    meow() {
        console.log("Meow !");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark;
    }
    else {
        animal.meow;
    }
}
