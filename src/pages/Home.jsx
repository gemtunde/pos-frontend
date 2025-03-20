import React from "react";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

const Home = () => {
  return (
    <section className="flex gap-3 bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      {/* left div */}
      <div className="flex-[3]">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earnings"
            icon={<BsCashCoin />}
            number={345}
            footerNum={3.4}
          />
          <MiniCard
            title="In Progress"
            icon={<GrInProgress />}
            number={109}
            footerNum={5.14}
          />
        </div>
        <RecentOrders />
      </div>
      {/* right div */}
      <div className="flex-[2]">
        <PopularDishes />
      </div>
    </section>
  );
};

export default Home;
