//Interface
interface User {
  name: string;
  age: number;
  email?: string; // Optional Property
  readonly id: number; // readonly property
}

//Object type annotation
let user: User = {
  name: "Arjun",
  age: 27,
  id: 1,
};
// user.id = 2;

// Interface With Methods

interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

let laptop: Product = {
  name: "MSI Titan HX",
  price: 600000,
  getDiscount(percentage: number): number {
    return this.price * (percentage / 100);
  },
};
