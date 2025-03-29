import React, { useState } from "react";
import { MdCategory, MdTableBar } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import Metrics from "../components/dashboard/Metrics";
// import RecentOrders from "../components/dashboard/Recentorders";
import Modal from "../components/dashboard/Modal";
import RecentOrders from "../components/home/RecentOrders";

const buttons = [
  { label: "Add Table", icon: <MdTableBar />, action: "table" },
  { label: "Add Category", icon: <MdCategory />, action: "category" },
  { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payment"];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Metrics");
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  const handleOpenModal = (action) => {
    if (action === "table") setIsTableModalOpen(true);
  };
  return (
    <div className="bg-[#1f1f1f] h-[calc(100vh-5rem)]">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => {
            return (
              <button
                onClick={() => handleOpenModal(action)}
                className="bg-[#1a1a1a] cursor-pointer hover:bg-[#262626] text-[#f5f5f5] px-8 py-3 rounded-lg font-semibold text-md flex items-center gap-2"
              >
                {label} {icon}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-[#ffc002]"
                    : "bg-[#1a1a1a] hover:bg-[#262626]"
                }  cursor-pointer  text-[#f5f5f5] px-8 py-3 rounded-lg font-semibold text-md flex items-center gap-2`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {activeTab === "Orders" && <RecentOrders />}
      {activeTab === "Metrics" && <Metrics />}
      {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}
    </div>
  );
};

export default Dashboard;
