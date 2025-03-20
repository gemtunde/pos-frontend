import React, { useState } from "react";
import BackButton from "../shared/BackButton";

const OrdersHeader = () => {
  const [status, setStatus] = useState("all");
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
          orders
        </h1>
      </div>
      <div className="flex items-center justify-around gap-4">
        <button
          onClick={() => setStatus("all")}
          className={`text-[#ababab] text-lg ${
            status === "all" ? "bg-[#383838] rounded-lg px-5 py-2" : ""
          }  rounded-lg px-5 py-2`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("progress")}
          className={`text-[#ababab] text-lg ${
            status === "progress" ? "bg-[#383838] rounded-lg px-5 py-2" : ""
          }  rounded-lg px-5 py-2`}
        >
          In Progress
        </button>
        <button
          onClick={() => setStatus("ready")}
          className={`text-[#ababab] text-lg ${
            status === "ready" ? "bg-[#383838] rounded-lg px-5 py-2" : ""
          }  rounded-lg px-5 py-2`}
        >
          Ready
        </button>
        <button
          onClick={() => setStatus("completed")}
          className={`text-[#ababab] text-lg ${
            status === "completed" ? "bg-[#383838] rounded-lg px-5 py-2" : ""
          }  rounded-lg px-5 py-2`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default OrdersHeader;
