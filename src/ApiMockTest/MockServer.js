import axios from "axios";
import React, { useState } from "react";

const MockServer = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const fetchUser = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/11")
      .then((res) => {
        const { username } = res.data;
        setUsername(username);
        setClicked(true);
      })
      .catch((err) => {
        setError("Fetching Failed !");
      });
  };

  const buttonText = clicked ? "Loaded" : "Start Fetch";
  return (
    <div>
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid>{error}</p>}
    </div>
  );
};

export default MockServer;
