import React from "react";
import logo from "../../assets/logo.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { removeUser } from "../../redux/slices/userSlice";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userData = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: (res) => {
      console.log(res);

      dispatch(removeUser());
      enqueueSnackbar(res.data.message, { variant: "success" });
      navigate("/auth");
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    },
  });
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src={logo} className="h-8 w-8" alt="logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Gemtunde POS</h1>
      </div>

      {/* search */}
      <div className="flex items-center gap-4 bg-[#454040] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#454040] text-[#f5f5f5] outline-none "
        />
      </div>

      {/* Logged user details */}
      <div className="flex items-center gap-4">
        {userData.role === "Admin" && (
          <div
            onClick={() => navigate("/dashboard")}
            className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer"
          >
            <MdDashboard className="text-[#f5f5f5] text-2xl" />
          </div>
        )}

        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-[14px] text-[#f5f5f5] font-semibold">
              {userData.name || "N/A"}
            </h1>
            <p className="text-xs text-[#ababab] font-medium">
              {userData.role || "Role"}
            </p>
          </div>
          <IoLogOut
            onClick={handleLogout}
            className="ml-4 text-white cursor-pointer"
            size={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
