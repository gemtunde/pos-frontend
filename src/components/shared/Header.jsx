import React from "react";
import logo from "../../assets/logo.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* logo */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Gemtunde</h1>
      </div>

      {/* search */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[700px]">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] text-[#f5f5f5] outline-none "
        />
        <FaSearch className="text-[#f5f5f5]" />
      </div>

      {/* Logged user details */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-[14px] text-[#f5f5f5] font-semibold">
              Tunde Elesho
            </h1>
            <p className="text-xs text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
