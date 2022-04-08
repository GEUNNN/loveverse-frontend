import axios from "axios";
import React from "react";

function App() {
  const result = axios.get("http://localhost:3001/data/main.json");
  result.then((res) => console.log(res));

  return <div className="App">loveverse 안뇽</div>;
}

export default App;
