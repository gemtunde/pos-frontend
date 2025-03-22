import React from "react";
import { useNavigate } from "react-router-dom";
import { getBgColor } from "../../utils";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ key, name, status, seat, initials }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (name) => {
    if (status === "Booked") return;
    dispatch(updateTable({ tableNo: name }));
    navigate("/menu");
  };
  return (
    <div
      key={key}
      className="w-[275px] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer"
      onClick={() => handleClick(name)}
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40] "
              : "text-[#f6b100] bg-[#f20909]"
          }px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>

      <div className="flex items-center justify-center my-5">
        <h1
          className="text-white rounded-full p-5 text-xl"
          style={{ backgroundColor: getBgColor() }}
        >
          {initials}
        </h1>
      </div>
      <p className="text-xs text-[#ababab]">
        Seats:
        <span className="text-[#f5f5f5]"> {seat}</span>
      </p>
    </div>
  );
};

export default TableCard;
