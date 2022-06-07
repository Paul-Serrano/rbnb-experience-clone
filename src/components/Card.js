import React from "react";
import star from "../../public/img/star.png";

function Card(props) {
  return (
    <div className="card">
      <img
        // src={`../../public/img/${props.img}.png`}
        src={props.img}
        className="card-img"
        alt=""
      />
      <div className="card-txt-container">
        <div className="card-txt-info-container">
          <img src={star} className="star" alt="" />
          <span className="card-txt-note">{props.rating}</span>
          <span className="card-txt-number gray">({props.reviewsNumber})</span>
          <span class="gray">&#8226;</span>
          <span className="card-txt-location gray">{props.location}</span>
        </div>
        <p className="card-txt-description">{props.description}</p>
        <p className="card-txt-price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
