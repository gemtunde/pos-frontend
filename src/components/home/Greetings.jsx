import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Greetings = () => {
  const userData = useSelector((state) => state.user);

  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formateDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}
        ${date.getFullYear()} `;
  };

  const formateTime = (date) =>
    `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}  `;
  return (
    <div className="flex items-center justify-between px-8 mt-5">
      <div>
        <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wide">
          Good Morning, {userData.name || "N/A"}
        </h1>
        <p className="text-[#ababab] text-sm">Give your best customers</p>
      </div>
      <div className="">
        <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide w-[130px]">
          {formateTime(dateTime)}
        </h1>
        <p className="text-[#ababab] text-sm">{formateDate(dateTime)}</p>
      </div>
    </div>
  );
};

export default Greetings;
