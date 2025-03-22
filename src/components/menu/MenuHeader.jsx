import React from "react";
import BackButton from "../shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import { useSelector } from "react-redux";

const MenuHeader = () => {
  const customerData = useSelector((state) => state.customer);
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
            {customerData.customerName ?? "Custmer Name"}
          </h1>
          <p className="text-xs text-[#ababab] font-medium">
            {customerData.tableNo ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
