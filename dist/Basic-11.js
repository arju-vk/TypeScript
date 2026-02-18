"use strict";
// Generics in TypeScript
function identity(arg) {
    return arg;
}
let Output1 = identity("Something");
let Output2 = identity("100");
// Generic with arrays
function getFirstElement(arr) {
    // any
    return arr[0];
}
let myNum = getFirstElement([1, 2, 3]);
let myName = getFirstElement(["Arjun", "VK"]);
let stringNumberPair = {
    key: {
        name: "Arjun",
        myKey: "Anything",
    },
    value: 22,
};
//Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i == item);
    }
    getItems() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("Chao"); // OK
logLength("123"); // OK
