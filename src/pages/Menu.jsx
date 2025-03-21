import React from "react";
import MenuHeader from "../components/menu/MenuHeader";
import MenuContainer from "../components/menu/MenuContainer";

import CustomerInfo from "../components/menu/CustomerInfo";
import CartInfo from "../components/menu/CartInfo";
import Bill from "../components/menu/Bill";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3 mb-8">
      {/* left dev */}
      <div className="flex-[3]">
        <MenuHeader />
        <MenuContainer />
      </div>
      {/* right div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        {/* customer info */}
        <CustomerInfo />
        <hr className="border-t-2 border-[#2a2a2a]" />
        {/* cart items */}
        <CartInfo />
        <hr className="border-t-2 border-[#2a2a2a]" />
        {/* BIlls */}
        <Bill />
      </div>
    </section>
  );
};

export default Menu;
