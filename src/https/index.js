import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//api endpoints

export const logout = () => api.post("/api/user/logout");
export const login = (data) => api.post("/api/user/login", data);
export const register = (data) => api.post("/api/user/register", data);
export const getUserData = () => api.get("/api/user");

//admin table
export const addTable = (data) => api.post("/api/table", data);
export const getTables = () => api.get("/api/table");

export const updateTable = ({ tableId, ...tableData }) =>
  api.put(`/api/table/${tableId}`, tableData);

//payment
export const createOrderRazorPay = (data) =>
  api.post("/api/payment/create-order", data);

//order
export const addOrder = (data) => api.post("/api/order", data);
