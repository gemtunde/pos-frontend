import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-16 bottom-0 left-0 bg-[#262626] p-2 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className="text-[#ababab] bg-[#343434] flex items-center justify-center w-[200px] rounded-[20px] cursor-pointer"
      >
        {" "}
        <FaHome className="inline mr-4" size={20} /> <p> Home </p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="text-[#ababab] flex items-center cursor-pointer justify-center w-[200px] rounded-[20px]"
      >
        <MdOutlineReorder className="inline mr-4" size={20} /> <p>orders </p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="text-[#ababab] flex items-center cursor-pointer justify-center w-[200px] rounded-[20px]"
      >
        <MdTableBar className="inline mr-4" size={20} /> <p> Tables </p>
      </button>
      <button
        onClick={() => navigate("/more")}
        className="text-[#ababab] flex items-center cursor-pointer justify-center w-[200px] rounded-[20px]"
      >
        <CiCircleMore className="inline mr-4" size={20} /> <p> More </p>
      </button>

      <button className="bg-[#f6B100] cursor-pointer text-[#000] rounded-full p-2">
        <BiSolidDish />
      </button>
    </div>
  );
};

export default BottomNav;
