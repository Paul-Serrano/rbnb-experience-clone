import React from "react";
import photoGroup from "../../public/img/photo-group.png";

function Static() {
  return (
    <div className="static">
      <img src={photoGroup} alt="" className="static-img" />
      <div className="static-txt">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Static;
