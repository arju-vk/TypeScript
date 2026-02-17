// Type Alias
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

//Type Alias for Primitives
type ID = string | number;

let userID: ID = "AK47";
let prodID: ID = 7;

// Type alias vs Interfaces

// Interfaces can be extended, type aliases cannot
interface Animal {
  name: string;
}

interface Lion extends Animal {
  breed: string;
}

let myLion: Lion = {
  name: "Buddy",
  breed: "Something",
  age: 3,
};

//Interfaces can be declared multiple times and will merge
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

let dog: Animal = {
  age: 3,
  name: "Buddy",
};

// Use interface for object Shape,
// type aliases for unions/intersections

interface User {
  name: string;
  age: number;
}
type UserID = string | number;
