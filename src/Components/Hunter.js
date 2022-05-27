import React, { Component } from "react";
import App from "../App";
import "./Title.css";
import data from "./data";
import image from "./FoodForSoul.jpeg";
import smoothscroll from "smoothscroll-polyfill";
import "./Nav.css";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import Product from "./Graph";
import Card from "./Card";

//let brooklyn = [];
//data.map((item) => {
//if (item.boro === "Brooklyn") {
//brooklyn.push(item);
//}
//});
const test = data.filter((item) => item.boro === "Brooklyn");
const styleRules = {
  height: 500
};
// export default class Hunter extends Component {
function Hunter(props) {
  return (
    <>
      <div id="Home" style={{ styleRules }}>
        <h1 className="Title">Stick with us!!</h1>

        <h3>We'll give you good reviews. </h3>
        <img src={image} alt="bruger" />
      </div>
      <div id="About1" style={{ height: 40 }}>
        <pre> </pre>
        <h1>This is the About section</h1>
      </div>
      <div id="About" style={{ height: 500 }}>
        <pre> </pre>
        <h3>
          Our Resturant Review site was created to give individuals the best
          reviews of resturants in NYC. we will tell you the honest opinions and
          grades for Resturants.We know that so many sites cannot be trusted and
          we want to give you all our honest opinions. On some of these
          resturants because honestly they be lying about reviews. Haveing they
          empolyess write reviews on the site They know no one goes cause they
          food is really garbage.{" "}
        </h3>
      </div>
      <div id="Contact1" style={{ height: 40 }}>
        <h1>This is Contact section</h1>
      </div>
      <div id="Contact" style={{ height: 500 }}>
        <h3>Maisons Pickle (212) 496-9100 info@maisonpickle.com</h3>
        <h3>TGI Friday 1 (800) 374-3297 </h3>
        <h3>Hard Rock 1 (888) 519-6683 customer.care@hardrock.com</h3>
        <h3>Apple Bees 1 (888) 592-7753</h3>
      </div>
      <div id="Data" style={{ height: 500 }}>
        <h1>Data visualization</h1>
        <Product />
      </div>
      <div id="RestaurantReviews1" style={{ height: 80 }}></div>
      <div id="RestaurantReviews" style={{ height: 1 }}>
        <h1>Restaurant Reviews</h1>
      </div>
    </>
  );
}

export default Hunter;
