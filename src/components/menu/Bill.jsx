import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice, removeAllItems } from "../../redux/slices/cartSlice";
import { enqueueSnackbar } from "notistack";
import { loadStripe } from "@stripe/stripe-js";
import { addOrder, createOrderRazorPay, updateTable } from "../../https";
import { useMutation } from "@tanstack/react-query";
import { removeCustomer } from "../../redux/slices/customerSlice";

// const stripePromise = loadStripe("your_publishable_key");
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Bill = () => {
  const cartData = useSelector((state) => state.cart);
  const customerData = useSelector((state) => state.customer);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = async () => {
    try {
      if (!paymentMethod) {
        enqueueSnackbar("Please select a payment MethOd", {
          variant: "warning",
        });
        return;
      }
      const stripe = await stripePromise;

      const reqData = {
        amount: Number(totalPriceWithTax),
      };

      //place order
      const orderData = {
        customerDetails: {
          name: customerData.customerName,
          phone: customerData.customerPhone,
          guests: customerData.guests,
        },
        orderStatus: "In Progress",
        bills: {
          total: total,
          tax: tax,
          totalWithTax: totalPriceWithTax,
        },
        items: cartData,
        table: customerData?.table?.tableId,
      };
      // orderMutation.mutate(orderData);
      setTimeout(() => {
        orderMutation.mutate(orderData);
      }, 1500);

      // Request a Checkout Session from the backend
      const { data } = await createOrderRazorPay(reqData);
      console.log("data on payment", data);

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({ sessionId: data.id });
      console.log("RESULT", result);
    } catch (error) {
      console.log(error);
    }
  };

  const orderMutation = useMutation({
    mutationFn: (reqData) => addOrder(reqData),
    onSuccess: (resData) => {
      const { data } = resData.data;
      console.log("order mutation", data);

      enqueueSnackbar("order Placed", {
        variant: "success",
      });

      //update table when order is a success
      const tableData = {
        status: "Booked",
        orderId: data._id,
        tableId: data.table,
      };

      setTimeout(() => {
        tableUpdateMutation.mutate(tableData);
      }, 1500);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const tableUpdateMutation = useMutation({
    mutationFn: (reqData) => updateTable(reqData),
    onSuccess: (resData) => {
      console.log("update table", resData);
      dispatch(removeCustomer());
      dispatch(removeAllItems());
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">
          Items({cartData.length})
        </p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          ${total.toFixed(2)}{" "}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">Tax(5.25%)</p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          ${tax.toFixed(2)}{" "}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] font-medium mt-2 text-xs">
          Total Price With tax
        </p>
        <h1 className="text-[#ababab] font-bold text-md tracking-wide">
          {" "}
          ${totalPriceWithTax.toFixed(2)}{" "}
        </h1>
      </div>
      <div className=" flex gap-4 items-center px-5 mt-4 ">
        <button
          onClick={() => setPaymentMethod("Cash")}
          className={`bg-[#1f1f1f] px-4 py-3 w-full text-[#000] font-semibold cursor-pointer ${
            paymentMethod === "Cash" ? "bg-[#fca801]" : ""
          }`}
        >
          Cash
        </button>
        <button
          onClick={() => setPaymentMethod("Online")}
          className={`bg-[#1f1f1f] px-4 py-3 w-full text-[#000] font-semibold cursor-pointer ${
            paymentMethod === "Online" ? "bg-[#fca801]" : ""
          }`}
        >
          Online
        </button>
      </div>

      <div className=" flex gap-4 items-center px-5 mt-4 ">
        <button className="bg-[#025cca] px-4 py-3 w-full text-[#f5f5f5] font-semibold text-lg">
          Print Receipt
        </button>
        <button
          onClick={handlePlaceOrder}
          className="bg-[#f6b100] px-4 py-3 w-full text-[#1f1f1f] font-semibold text-lg"
        >
          Place order
        </button>
      </div>
    </>
  );
};

export default Bill;
