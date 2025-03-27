import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../../https";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    loginMutation.mutate(formData);
  };

  const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const { data } = res;
      console.log(data);

      enqueueSnackbar(data.message, { variant: "success" });
      navigate("/");
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

        <button
          type="submit"
          className="w-full cursor-pointer font-bold rounded-lg mt-6 py-3 text-lg bg-yellow-400 text-gray-900"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
