"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Right;
// String enum
var Stat;
(function (Stat) {
    Stat["Pending"] = "PENDING";
    Stat["Approved"] = "APPROVED";
    Stat["Rejected"] = "REJECTED";
})(Stat || (Stat = {}));
let St = Stat.Approved;
function handleResponse(status) {
    if (status === 200 /* HttpStatus.OK */) {
        console.log("Success!");
    }
    else
        console.log("Failed");
}
