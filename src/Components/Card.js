import React from "react";
import "../App.css";
import CardImage from "./CardImage.js";
import CardInfo from "./CardInfo.js";

function Card(props) {
  return (
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
          <CardImage Restaurant={props.Restaurant} />
          <CardInfo Restaurant={props.Restaurant} />
        </div>
      </div>
    </li>
  );
}

export default Card;
