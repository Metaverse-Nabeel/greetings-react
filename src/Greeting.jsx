import { useState, useEffect } from "react";
import axios from "axios";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/messages")
      .then((response) => {
        setGreeting(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching greeting:", error);
      });
  }, []);

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Greetings:</h2>
      <p className="text-gray-600">{greeting}</p>
    </div>
  );
};

export default Greeting;
