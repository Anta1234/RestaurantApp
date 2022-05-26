import React from "react";
import "./Title.css";
import image from "./FoodForSoul.jpeg";

function Title() {
  return (
    <div className="Title">
      <h1>Stick with us!!</h1>

      <h3>We'll give you good reviews. </h3>
      <img src={image} width=100/>
    </div>
  );
}

export default Title;
