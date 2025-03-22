import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formateDate, getAvatarName } from "../../utils";

const CustomerInfo = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector((state) => state.customer);

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md text-[#ababab] font-semibold tracking-wide">
          {customerData.customerName ?? "Custmer Name"}
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          {customerData.orderId ?? 0}
        </p>
        <p className="text-xs text-[#ababab] font-medium mt-2">
          {formateDate(dateTime) ?? "N/A"}
        </p>
      </div>
      <button className="p-3 bg-[#f6b100] text-xl font-bold rounded-lg">
        {getAvatarName(customerData.customerName) ?? "N/A"}
      </button>
    </div>
  );
};

export default CustomerInfo;
