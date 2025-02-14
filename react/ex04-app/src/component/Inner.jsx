import React from "react";

export const Inner = () => {
  const inner = {
    display: "flex",
    margin: "0 auto",
    fontSize: "10px",
    height: "42px",
    backgroundColor: "#f8f8fa",
    alignItems: "center",
  };
  return (
    <div className="">
      <ul style={inner} c>
        <li className="m-[7px] ">
          <img src="https://img.megabox.co.kr/static/pc/images/common/bg/bg-location-home.png"></img>
        </li>
        <li className="m-[7px] flex">
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/bg/bg-location-arr.png"
            className="w-[5px] h-[10px] mt-[1px] mr-[7px]"
          ></img>
          영화
        </li>
        <li className="m-[7px] flex">
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/bg/bg-location-arr.png"
            className="w-[5px] h-[10px] mt-[1px] mr-[7px]"
          ></img>
          전체영화
        </li>
      </ul>
    </div>
  );
};
export default Inner;
