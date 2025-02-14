import React from "react";

export const SubNav = () => {
  const top = {
    display: "flex",
    height: "90px",
    justifyContent: "center",
  };
  const subnav = {
    dislplay: "flex",
    flexDirection: "column",
    fontSize: "8px",
    margin: "10px",
  };
  const contorl = {
    width: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  };
  const topnav = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={top}>
      <div style={contorl}>
        <div style={topnav}>
          <div style={subnav}>
            <a href="#" className="mr-[10px]">
              VIP LOUNGE
            </a>
            <a href="#" className="mr-[5px]">
              멤버쉽
            </a>
            <a href="#" className="mr-[5px]">
              고객센터
            </a>
          </div>
          <div style={subnav}>
            <a href="#" className="mr-[5px]">
              로그인
            </a>
            <a href="#" className="mr-[5px]">
              회원가입
            </a>
            <a href="#" className="mr-[5px]">
              빠른예매
            </a>
          </div>
        </div>
        <MainNav />
      </div>
    </div>
  );
};

export const MainNav = () => {
  const total = {
    display: "flex",
    height: "90px",
    justifyContent: "center",
    flexDirection: "column",
  };
  const side = {
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    width: "800px",
  };
  const main = {
    display: "flex",
  };
  const left = {
    display: "flex",
    marginLeft: "0",
  };
  const right = {
    display: "flex",
    marginRight: "0",
  };
  const left_nav = {
    display: "flex",
    flexDirection: "",
  };
  return (
    <div style={total}>
      <div style={side}>
        <div style={left}>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-sitemap.png"
            className=" w-5 h-4 mr-[15px]"
          ></img>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-search.png"
            className=" w-4 h-4 mr-[15px]"
          ></img>
        </div>
        <div>
          <ul style={left_nav}>
            <li className="mr-[25px]">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-movie.png"
                alt="영화"
              />
            </li>
            <li className="mr-[25px]">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-reserve.png"
                alt="예매"
              />
            </li>
            <li className="mr-[25px]">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-theater.png"
                alt="극장"
              />
            </li>
          </ul>
        </div>
        <div style={main}>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ci/logo_new2.png"
            className="w-25 h-10 "
          ></img>
        </div>
        <div>
          <ul style={left_nav}>
            <li className="mr-[25px]">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-event.png"
                alt="이벤트"
              />
            </li>
            <li className="mr-[25px]">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-store.png"
                alt="스토어"
              />
            </li>
            <li className="mr-[25px]">
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/gnb/gnb-txt-benefit.png"
                alt="혜택"
              />
            </li>
          </ul>
        </div>
        <div style={right}>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule.png"
            className=" w-7 h-7 mr-[15px]"
          ></img>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mymega.png"
            className=" w-4 h-4 mr-[15px]"
          ></img>
        </div>
      </div>
    </div>
  );
};
