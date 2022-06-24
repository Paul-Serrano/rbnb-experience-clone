import React from "react";
import star from "../../public/img/star.png";
import data from "../data";

function Card(props) {
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    else if (props.item.location === "ONLINE") {
        badgeText = "ONLINE";
    }
  return (
    <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        // src={`../../public/img/${props.img}.png`}
        src={props.item.img}
        className="card-img"
        alt=""
      />
      <div className="card-txt-container">
        <div className="card-txt-info-container">
          <img src={star} className="star" alt="" />
          <span className="card-txt-note">{props.item.stats.rating}</span>
          <span className="card-txt-number gray">({props.item.stats.reviewsNumber})</span>
          <span className="gray">&#8226;</span>
          <span className="card-txt-location gray">{props.item.location}</span>
        </div>
        <p className="card-txt-description">{props.item.description}</p>
        <p className="card-txt-price">
          <strong>From ${props.item.price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
