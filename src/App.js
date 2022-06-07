import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Static from "./components/Static";
import Card from "./components/Card";
import image1 from "../public/img/image1.png";
import image2 from "../public/img/image2.png";
import image3 from "../public/img/image3.png";

function App() {
  return (
    <div className="App">
      <div className="rbnb-experience-clone">
        <Nav />
        <Static />
        <div className="card-container">
          <Card
            img={image1}
            rating={"5.0"}
            reviewsNumber={6}
            location={"USA"}
            description={"Life lessons with Katie Zaferes"}
            price={136}
          />
          <Card
            img={image2}
            rating={"5.0"}
            reviewsNumber={30}
            location={"USA"}
            description={"Learn wedding photography"}
            price={125}
          />
          <Card
            img={image3}
            rating={"4.8"}
            reviewsNumber={2}
            location={"USA"}
            description={"Group Mountain Biking"}
            price={50}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
