import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex  justify-between items-center px-6 py-4">
          <h1 className="text-lg text-[#f5f5f5] tracking-wide font-semibold">
            Recent orders
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>
        <div
          className="flex items-center gap-4 bg-[#1f1f1f]
      rounded-[15px] py-5 px-5 mx-6 "
        >
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#1f1f1f] text-[#f5f5f5] outline-none "
          />
        </div>
        {/* orders list */}
        <div className="mt-4 px-6 overflow-y-scroll scrollbar-hide h-[300px]">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
