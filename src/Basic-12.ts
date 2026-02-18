interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTO: string;
}

// Partial - makes all properties optional
type PartialTodo = Partial<Todo>;
let updateTodo: PartialTodo = {
  completed: true,
};

// Required - makes all properties required.

type RequiredTodo = Required<Todo>;

//ReadOnly - makes all properties readonly.

type ReadOnlyTodo = Readonly<Todo>;
let myTodo: ReadOnlyTodo = {
  title: "Ehh... World ?",
  description: "Nahh",
  completed: false,
  createdAt: new Date(),
  assignedTO: "Me",
};
// myTodo.completed = true;

//Pick - pick specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;

//Omit - omit specific properties
type TodoWithoutDate = Omit<Todo, "createdAt">;

//Record - construct object type with specific keys and value type

type PageInfo = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";

type Merged = Record<Pages, PageInfo>;

let pages: Merged = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/" },
  contact: { title: "Contact", url: "/contact" },
};

//ReturnType- get return type of function
function createUser() {
  return {
    id: 1,
    name: "Arjun",
    email: "avk@gmail.com",
  };
}
type UserType = ReturnType<typeof createUser>;
