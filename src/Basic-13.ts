enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Right;

// String enum

enum Stat {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

let St: Stat = Stat.Approved;

/* Real World Examples
 Const enum (more performant) */

const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}
function handleResponse(status: HttpStatus): void {
  if (status === HttpStatus.OK) {
    console.log("Success!");
  } else console.log("Failed");
}
