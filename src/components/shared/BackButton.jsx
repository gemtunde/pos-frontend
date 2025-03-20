import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[#f6b100] p-3 rounded-full text-xl cursor-pointer"
    >
      <IoArrowBackOutline />
    </button>
  );
};

export default BackButton;
