"use strict";
//Promise with TypeScript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "Arjun" });
        }, 1000);
    });
}
// Async/Await
async function getUserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.log("Error fetching user : ", error);
    }
}
// Generic async function
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}
fetchData("");
