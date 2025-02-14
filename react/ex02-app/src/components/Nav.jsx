// components/Nav.js
import React from "react";
import "../App.css";

const Nav = () => {
  const navStyle = {
    backgroundColor: "lightgray",
    height: "30px",
    border: "1px solid black",
    width: "95%",
    margin: "0 auto",
    display: "flex",
  };
  const select = {
    marginRight: "5px",
    color: "white",
    fontSize: "12px",
  };

  return (
    <div id="nav" className="box" style={navStyle}>
      <a href="#" style={select}>
        About
      </a>
      <a href="#" style={select}>
        History
      </a>
      <a href="#" style={select}>
        Information
      </a>
      <a href="#" style={select}>
        SNS
      </a>
    </div>
  );
};

export default Nav;
