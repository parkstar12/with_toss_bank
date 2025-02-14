// components/Aside.js
import React from "react";
import "../App.css";

const Aside = () => {
  const asideStyle = {
    margin: "10px",
    border: "1px solid green",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    fontSize: "12px",
    marginLeft: "0px",
  };

  const listyle = {
    listStyle: "none",
    alignItems: "left",
  };

  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };
  return (
    <div id="aside" style={asideStyle}>
      <h4>
        <b>Golden Retriever</b>
      </h4>
      <img src="dog.jpg" alt="리트리버" style={imgStyle} />
      <ul>
        <li style={listyle}>● 기본특성</li>
        <li style={listyle}>● 단점</li>
        <li style={listyle}>● 키울 시 주의점</li>
        <li style={listyle}>● 파생 혼종견</li>
      </ul>
    </div>
  );
};

export default Aside;
