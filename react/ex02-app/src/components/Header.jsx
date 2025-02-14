// components/Header.js
import React from "react";
import "../App.css";

const Header = () => {
  const headerStyle = {
    backgroundColor: "aqua",
    height: "50px",
    width: "100%",
    fontFamily: "Nanum Gothic",
    fontWeight: "400",
    fontStyle: "normal",
    display: "flex",
    fontSize: "22px",
  };

  return (
    <div id="header" className="box" style={headerStyle}>
      골든리트리버 - Golden Retriever
    </div>
  );
};

export default Header;
