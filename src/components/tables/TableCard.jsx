import React from "react";

const TableCard = ({
  key,
  name,
  status,
  // seat,
  initials,
}) => {
  return (
    <div
      key={key}
      className="w-[275px] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer"
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
        <h1 className="text-white bg-[#025cca] rounded-full p-5 text-xl">
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
