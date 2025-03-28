import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";
import { enqueueSnackbar } from "notistack";
import { loadStripe } from "@stripe/stripe-js";
import { createOrderRazorPay } from "../../https";

// const stripePromise = loadStripe("your_publishable_key");
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Bill = () => {
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) / 100;
  const totalPriceWithTax = total + tax;

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
      // Request a Checkout Session from the backend
      const { data } = await createOrderRazorPay(reqData);

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({ sessionId: data.id });
      console.log("RESULT", result);
    } catch (error) {
      console.log(error);
    }
  };

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
