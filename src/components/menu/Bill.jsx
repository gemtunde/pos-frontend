import React from "react";

const Bill = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">Items(4)</p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          $240{" "}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">Tax(4.34%)</p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          $20{" "}
        </h1>
      </div>
      <div className=" flex gap-4 items-center px-5 mt-4 ">
        <button className="bg-[#1f1f1f] px-4 py-3 w-full text-[#ababab] font-semibold">
          Cash
        </button>
        <button className="bg-[#1f1f1f] px-4 py-3 w-full text-[#ababab] font-semibold">
          online
        </button>
      </div>

      <div className=" flex gap-4 items-center px-5 mt-4 ">
        <button className="bg-[#025cca] px-4 py-3 w-full text-[#f5f5f5] font-semibold text-lg">
          Print Receipt
        </button>
        <button className="bg-[#f6b100] px-4 py-3 w-full text-[#1f1f1f] font-semibold text-lg">
          Place order
        </button>
      </div>
    </>
  );
};

export default Bill;
