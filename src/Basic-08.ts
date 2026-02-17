//String literal types

let direction: "north" | "south" | "west" | "east";
direction = "north";

//Numeric literal

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

//Combining with other types
type SuccessResponse = {
  status: "Success";
  data: any;
};

type ErrorResponse = {
  status: "Error 404 !";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
