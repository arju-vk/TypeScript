"use strict";
let updateTodo = {
    completed: true,
};
let myTodo = {
    title: "Ehh... World ?",
    description: "Nahh",
    completed: false,
    createdAt: new Date(),
    assignedTO: "Me",
};
let pages = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/" },
    contact: { title: "Contact", url: "/contact" },
};
//ReturnType- get return type of function
function createUser() {
    return {
        id: 1,
    };
}
