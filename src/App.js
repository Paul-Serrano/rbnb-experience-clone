import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Static from "./components/Static";
import Card from "./components/Card";
import data from "./data"

function App() {
  const cards = data.map(item => {
    return <Card
        key={item.key}
        item={item}
    />
  })
  return (
    <div className="App">
      <div className="rbnb-experience-clone">
        <Nav />
        <Static />
        <div className="card-container">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
