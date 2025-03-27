import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../../https";
import { enqueueSnackbar } from "notistack";
// import { useNavigate } from "react-router-dom";

const Register = ({ setIsRegister }) => {
  //const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRoleSelection = (role) => {
    setFormData({
      ...formData,
      role: role,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    registerMutation.mutate(formData);
  };
  const registerMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      const { data } = res;
      console.log(data);
      //const { _id, name, email, phone, role } = data.data;
      // dispatch(setUser({ _id, name, email, phone, role }));
      enqueueSnackbar(data.message, { variant: "success" });

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });

      setTimeout(() => {
        setIsRegister(false);
      }, 1500);
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex item-center bg-[#1f1f1f] rounded-lg p-5 px-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="employee name"
              required
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex item-center bg-[#1f1f1f] rounded-lg p-5 px-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="employee email"
              required
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Phone
          </label>
          <div className="flex item-center bg-[#1f1f1f] rounded-lg p-5 px-4">
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="employee phone number"
              required
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Password
          </label>
          <div className="flex item-center bg-[#1f1f1f] rounded-lg p-5 px-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*********"
              required
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Choose your role
          </label>
          <div className="flex item-center gap-3 mt-4">
            {["Waiter", "Cashier", "Admin"].map((role) => (
              <button
                key={role}
                type="button"
                value={formData.role}
                onClick={() => handleRoleSelection(role)}
                className={`  cursor-pointer px-4 py-3 w-full rounded-lg text-[#ababab] ${
                  formData.role === role ? "bg-yellow-800" : "bg-[#1f1f1f]"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer font-bold rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
