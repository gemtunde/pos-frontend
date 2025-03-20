import React from "react";
import { FaCheckDouble } from "react-icons/fa";

const OrderList = () => {
  return (
    <div className="flex items-center gap-5 py-4">
      <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
        AM
      </button>
      <div className="flex items-center justify-between w-[100%] ">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Tunde Elesho
          </h1>
          <p className="text-[#ababab] text-sm">8 Items</p>
        </div>
        <div className="border border-[#f6b100] p-1 rounded-lg ">
          <h1 className="text-[#f6b100] text-[14px] font-semibold p-1">
            Table No: 3
          </h1>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="px-4 text-green-600">
            <FaCheckDouble className="inline mr-2" /> Ready
          </p>
          <p className="px-4 text-sm text-[#ababab]">
            <FaCheckDouble className="text-green-600 inline mr-2" /> Ready to
            serve
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
