import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [myName, setMyName] = useState("Hello Matrix!");
  const changeTitle = () => {
    setMyName("Hello Tushar!");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeTitle}>
        Log IN
      </button>
    </div>
  );
};

export default App;
