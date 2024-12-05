import { useEffect } from "react";

function App() {
  useEffect(() => {
    const data=fetch("http://127.0.0.1:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Fetched users:", data); // Log the array of user objects
      })
      .catch((error) => {
        console.error("Error fetching users:", error); // Handle errors
      });
  }, []);

  return (
    <div className="App">
      <h1>Check Console for User Data</h1>
    </div>
  );
}

export default App;
