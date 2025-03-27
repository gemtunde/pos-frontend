import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { addTable } from "../../https";
import { enqueueSnackbar } from "notistack";

const Modal = ({ setIsTableModalOpen }) => {
  const handleCloseModal = () => {
    setIsTableModalOpen(false);
  };

  const [tableData, setTableData] = useState({
    tableNo: "",
    seats: "",
  });
  const handleChange = (e) => {
    setTableData({
      ...tableData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tableData);
    tableMutation.mutate(tableData);
  };
  const tableMutation = useMutation({
    mutationFn: (reqData) => addTable(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });

      setTableData({
        tableNo: "",
        seats: "",
      });

      setTimeout(() => {
        setIsTableModalOpen(false);
      }, 1500);
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });

  return (
    <div className="fixed inset-0 bg-[#262626] opacity-95 flex items-center justify-center z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-black p-6 rounded-lg shadow-lg w-96"
      >
        {/* header */}
        <div className="flex justify-between item-center mb-4">
          <h2 className="text-xl text-[#f5f5f5] font-semibold">Add Table</h2>
          <button
            onClick={handleCloseModal}
            className="text-[#f5f5f5] hover:text-red-500 cursor-pointer"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        {/* bdy */}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-[#ababab] mb-2 text-sm font-medium">
              Table Number
            </label>
            <div className="flex item-center bg-[#1f1f1f] rounded-lg p-5 px-4">
              <input
                type="number"
                name="tableNo"
                value={tableData.tableNo}
                onChange={handleChange}
                placeholder="Table number"
                required
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-[#ababab] mb-2 text-sm font-medium">
              Table Number of Seats
            </label>
            <div className="flex item-center bg-[#1f1f1f] rounded-lg p-5 px-4">
              <input
                type="number"
                name="seats"
                value={tableData.seats}
                onChange={handleChange}
                placeholder="Table number"
                required
                className="bg-transparent flex-1 text-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer font-bold rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900"
          >
            Add Table
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
