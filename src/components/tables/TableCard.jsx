import React from "react";
import { useNavigate } from "react-router-dom";
import { getAvatarName, getBgColor } from "../../utils";
import { useDispatch } from "react-redux";
import { updateTable } from "../../redux/slices/customerSlice";
import { FaLongArrowAltRight } from "react-icons/fa";

const TableCard = ({ id, name, status, seat, initials }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (name) => {
    if (status === "Booked") return;

    const table = { tableId: id, tableNo: name };
    dispatch(updateTable({ table }));

    navigate("/menu");
  };
  return (
    <div
      key={id}
      className="w-[275px] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer"
      onClick={() => handleClick(name)}
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">
          Table
          <FaLongArrowAltRight className="text-[#ababab] ml-2 inline" />
          {name}
        </h1>
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
          className="text-white rounded-full p-4 text-xl"
          style={{ backgroundColor: initials ? getBgColor() : "#1f1f1f" }}
        >
          {getAvatarName(initials) || "N/A"}
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
