//Promise with TypeScript
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Arjun" });
    }, 1000);
  });
}

// Async/Await

async function getUserData(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user.name);
  } catch (error) {
    console.log("Error fetching user : ", error);
  }
}

// Generic async function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}

fetchData<string>("");
