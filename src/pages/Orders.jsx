import React from "react";
import OrdersHeader from "../components/orders/OrdersHeader";
import OrderCard from "../components/orders/OrderCard";

const Orders = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden mb-8">
      <OrdersHeader />
      <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll h-[calc(100vh-10rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </section>
  );
};

export default Orders;
