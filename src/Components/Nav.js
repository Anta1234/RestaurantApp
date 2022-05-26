import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import "./Nav.css";

smoothscroll.polyfill();

const Nav = () => {
  const handleClick = (e) => {
    e.preventDefault();
    document
      .getElementById(e.currentTarget.hash.slice(1))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#Home" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={handleClick}>
            About
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <li>
          <a href="#Data" onClick={handleClick}>
            Data
          </a>
        </li>
        <li>
          <a href="#RestaurantReviews" onClick={handleClick}>
            Restaurant Reviews
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
