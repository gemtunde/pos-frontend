import React from "react";

const CustomerInfo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[#ababab] font-semibold tracking-wide">
          Customer Name
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">#101/Dine in</p>
        <p className="text-xs text-[#ababab] font-medium mt-2">
          January 19, 2025 4:34PM
        </p>
      </div>
      <button className="p-3 bg-[#f6b100] text-xl font-bold rounded-lg">
        CN
      </button>
    </div>
  );
};

export default CustomerInfo;
