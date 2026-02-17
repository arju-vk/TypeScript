//Type Assertions
let someValue: unknown = "I don't know ";
let strLength: number = (someValue as string).length;
//Or
let strLength2: number = (<string>someValue).length;

//Type Guards
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else {
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

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark;
  } else {
    animal.meow;
  }
}
