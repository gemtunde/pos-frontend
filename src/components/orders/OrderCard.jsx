import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-[490px] bg-[#262626] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-5 py-4">
        <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
          AM
        </button>
        <div className="flex items-center justify-between w-[100%] ">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              Tunde Elesho
            </h1>
            <p className="text-[#ababab] text-sm">#101 /Dine in</p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className=" text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg">
              <FaCheckDouble className=" inline mr-2" /> Ready
            </p>
            <p className=" text-sm text-[#ababab]">
              <FaCircle className="text-green-600 inline mr-2" /> Ready to serve
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center text-[#ababab] justify-between mt-4  ">
        <p className="">January 18, 2026 8:23 PM</p>
        <p className="">8 Items</p>
      </div>
      <hr className="w-full mt-4 border-t-1 border-gray-500" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl text-[#f5f5f5] font-semibold">Total</h1>
        <p className="text-lg text-[#f5f5f5] font-semibold">$345.00</p>
      </div>
    </div>
  );
};

export default OrderCard;
