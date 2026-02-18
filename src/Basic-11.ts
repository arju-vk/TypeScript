// Generics in TypeScript

function identity<MyType>(arg: MyType): MyType {
  return arg;
}

let Output1 = identity("Something");
let Output2 = identity("100");

// Generic with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  // any
  return arr[0];
}

let myNum = getFirstElement([1, 2, 3]);
let myName = getFirstElement(["Arjun", "VK"]);

//Generic interfaces
interface KeyValuePair<k, v> {
  key: {
    name: string;
    myKey: k;
  };
  value: v;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: {
    name: "Arjun",
    myKey: "Anything",
  },
  value: 22,
};

//Generic Classes

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }
  removeItem(item: T): void {
    this.data = this.data.filter((i) => i! == item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");

//Generic Constraints
interface LengthWise {
  length: number;
}

function logLength<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("Chao"); // OK
logLength("123"); // OK
