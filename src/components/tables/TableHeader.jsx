import React, { useState } from "react";
import BackButton from "../shared/BackButton";

const TableHeader = () => {
  const [status, setStatus] = useState("all");
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
          Tables
        </h1>
      </div>
      <div className="flex items-center justify-around gap-4">
        <button
          onClick={() => setStatus("all")}
          className={`text-[#ababab] text-lg ${
            status === "all" ? "bg-[#383838] rounded-lg px-5 py-2" : ""
          }  rounded-lg px-5 py-2 cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("booked")}
          className={`text-[#ababab] text-lg ${
            status === "booked" ? "bg-[#383838] rounded-lg px-5 py-2" : ""
          }  rounded-lg px-5 py-2 cursor-pointer`}
        >
          Booked
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
