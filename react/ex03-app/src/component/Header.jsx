import React from "react";

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center h-16 shadow-lg px-5">
      <div className="text-2xl font-bold text-blue-600">TechStore</div>
      <nav className="flex">
        <ul className="flex space-x-8">
          <li className="relative group">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              제품
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-36">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  전자기기
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  의류
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  도서
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  액세사리
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              서비스
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-36">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  컨설팅
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  교육
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  고객지원
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  유지보수
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              회사소개
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-lg mt-2 w-36">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  회사정보
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  팀 소개
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  채용정보
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                >
                  연락처
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
