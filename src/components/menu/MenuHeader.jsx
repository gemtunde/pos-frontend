import React from "react";
import BackButton from "../shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";

const MenuHeader = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
          Tables
        </h1>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <MdRestaurantMenu className="text-[#f5f5f5] text-4xl" />
        <div className="flex flex-col items-start">
          <h1 className="text-[14px] text-[#f5f5f5] font-semibold">
            Customer Name
          </h1>
          <p className="text-xs text-[#ababab] font-medium">Table No.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
