import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full h-[64px] bg-white shadow-md">
      <div className="h-full flex justify-evenly items-center">
        <img className="" height={128} width={128} src="/next.svg" alt="HI" />
        <div className="flex justify-center items-center">
          <button className="hover:bg-gray-200 rounded-xl p-4">
            회사 소개
          </button>
          <button className="hover:bg-gray-200 rounded-xl p-4">
            자주 묻는 질문
          </button>
          <button className="hover:bg-gray-200 rounded-xl p-4">고객센터</button>
          <button className="hover:bg-gray-200 rounded-xl p-4">채용</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
