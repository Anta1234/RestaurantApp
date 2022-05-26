import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Curry extends Component {
  render() {
    return (
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around"
        }}
      ></ul>
    );
  }
}
