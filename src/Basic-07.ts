// Union types (OR)
//Intersection type (AND)
type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  console.log(`Status set to: ${status}`);
}
setStatus("approved");

//Intersection types (AND)
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Circle & Colorful;

let myCircle: ColorfulCircle = {
  color: "blue",
  radius: 10,
};
