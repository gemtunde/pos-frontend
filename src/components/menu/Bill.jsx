import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";

const Bill = () => {
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">
          Items({cartData.length})
        </p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          ${total.toFixed(2)}{" "}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">Tax(5.25%)</p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          ${tax.toFixed(2)}{" "}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">
          Total Price With tax
        </p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          ${totalPriceWithTax.toFixed(2)}{" "}
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
