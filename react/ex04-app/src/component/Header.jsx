import React from "react";
import { SubNav, MainNav } from "./Nav";

const Header = () => {
  const subnav = {};
  const header = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    borderBottom: "1px solid #351f67",
  };
  return (
    <div style={header}>
      <SubNav />
      {/* 메가 로고 */}
    </div>
  );
};

export default Header;
//"bg-[url('https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png')]"
