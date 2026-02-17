"use strict";
//Object type annotation
let user = {
    name: "Arjun",
    age: 27,
    id: 1,
};
let laptop = {
    name: "MSI Titan HX",
    price: 600000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
