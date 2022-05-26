import React, { Component } from "react";
import "./App.css";
import Curry from "./Components/Curry";
import Hunter from "./Components/Hunter";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Restaurant from "./Restaurants.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: [
        { name: "Maisons pickle", grade: "4.5" },
        { name1: "TGI Friday", grade1: "3.0" },
        { name2: "Hard Rock Cafe", grade2: "1" },
        { name3: "The Kunjip Korean BBQ", grade3: "5" }
      ]
    };
  }
  //https://data.cityofnewyork.us/resource/43nn-pn8j.json?$$app_token=lDiiUShQ2V0SqCFSG5c5Ct2yA
  render() {
    return (
      <div className="App">
        <Nav />
        <Curry />
        <Hunter />
        <div className="container">
          <ul className="cards">
            {Restaurant.Restaurants.map((Restaurant, index) => {
              return (
                <Card
                  Restaurant={Restaurant}
                  name={this.state.x.name}
                  grade={this.state.x.grade}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
