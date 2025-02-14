// components/Main.js
import React from "react";

import "../App.css";

const Main = ({ children }) => {
  const mainStyle = {
    backgroundColor: "aqua",
    // 내부에 Section과 Aside를 flex로 배치
    display: "flex",
    flexFlow: "row-reverse nowrap",
    width: "95%",
    margin: "0 auto",
  };

  return (
    <div id="main" style={mainStyle}>
      {children}
    </div>
  );
};

export default Main;
