import React from "react";
import "../App.css";

function CardImage(props) {
  const background = props.Restaurant.name;
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <img src={props.Restaurant.image} alt="Restaurant" />
    </div>
  );
}

export default CardImage;
