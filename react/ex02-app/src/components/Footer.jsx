// components/Footer.js
import React from "react";
import "../App.css";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "lightgray",
    height: "50px",
    color: "black",
  };
  const Footera = {
    marginRight: "5px",
    color: "black",
  };
  return (
    <div id="footer" className="box" style={footerStyle}>
      <a href="#" style={Footera}>
        Subscribe
      </a>
      <a href="#" style={Footera}>
        About Author
      </a>
      <a href="#" style={Footera}>
        Send us Email
      </a>
    </div>
  );
};

export default Footer;
