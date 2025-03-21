import React, { useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const decrement = () => {
    setGuestCount((prev) => prev - 1);
  };
  const increment = () => {
    setGuestCount((prev) => prev + 1);
  };

  return (
    <div className="fixed w-full h-16 bottom-0 left-0 bg-[#262626] p-2 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className="text-[#ababab] bg-[#343434] flex items-center justify-center w-[200px] rounded-[20px] cursor-pointer"
      >
        {" "}
        <FaHome className="inline mr-4" size={20} /> <p> Home </p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="text-[#ababab] flex items-center cursor-pointer justify-center w-[200px] rounded-[20px]"
      >
        <MdOutlineReorder className="inline mr-4" size={20} /> <p>orders </p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="text-[#ababab] flex items-center cursor-pointer justify-center w-[200px] rounded-[20px]"
      >
        <MdTableBar className="inline mr-4" size={20} /> <p> Tables </p>
      </button>
      <button
        onClick={() => navigate("/more")}
        className="text-[#ababab] flex items-center cursor-pointer justify-center w-[200px] rounded-[20px]"
      >
        <CiCircleMore className="inline mr-4" size={20} /> <p> More </p>
      </button>

      <button
        onClick={openModal}
        className="absolute bottom-6 bg-[#f6B100] cursor-pointer text-[#000] rounded-full p-2 items-center"
      >
        <BiSolidDish size={40} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="bg-[#1f1f1f] flex items-center rounded-lg p-3 px-4">
            <input
              type="text"
              placeholder="customer name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="bg-[#1f1f1f] flex items-center rounded-lg p-3 px-4">
            <input
              type="number"
              placeholder="+234 0700000000"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mt-3 mb-2 text-sm font-medium">
            Guest
          </label>
          <div className="bg-[#1f1f1f] flex items-center justify-between rounded-lg py-3 px-4">
            <button
              disabled={guestCount <= 0}
              onClick={decrement}
              className="text-yellow-500 text-2xl"
            >
              &minus;{" "}
            </button>
            <span className="text-white">
              {guestCount} {`${guestCount > 1 ? "Persons" : "Person"}`}
            </span>
            <button
              disabled={guestCount >= 10}
              onClick={increment}
              className="text-yellow-500 text-2xl"
            >
              &#43;{" "}
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/tables");
            setIsModalOpen(false);
          }}
          className=" w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700"
        >
          Create order{" "}
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
