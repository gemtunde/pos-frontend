import React, { useState } from "react";
import { menus } from "../constants";
import { getBgColor } from "../../utils";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";
import { v4 as uuidv4 } from "uuid";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [guestCount, setGuestCount] = useState(0);
  const [itemId, setItemId] = useState();

  const decrement = (id) => {
    setItemId(id);
    setGuestCount((prev) => prev - 1);
  };
  const increment = (id) => {
    setItemId(id);
    setGuestCount((prev) => prev + 1);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    if (guestCount === 0) return;

    const { name, price } = item;
    const newObj = {
      id: uuidv4(),
      name,
      price: price * guestCount,
      pricePerQuantity: price,
      quantity: guestCount,
    };
    dispatch(addItems(newObj));
    setGuestCount(0);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-100%">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="cursor-pointer rounded-lg h-[100px] flex flex-col items-start justify-between p-4"
              style={{ backgroundColor: getBgColor() }}
              onClick={() => {
                setGuestCount(0);
                setSelected(menu);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-[16px] font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-100%">
        {selected?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="bg-[#1a1a1a] hover:bg-[#2a2a2a] cursor-pointer rounded-lg h-[150px] flex flex-col items-start justify-between p-4"
              // style={{ backgroundColor: "#1a1a1a" }}
              // onClick={() => setSelected(menu)}
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-[16px] font-semibold">
                  {menu.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(menu)}
                  className="text-[#02ca3a] bg-[#2e4a40] rounded-lg p-2 cursor-pointer"
                >
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#fff] text-xl font-bold">${menu.price}</p>
                <div className="bg-[#1f1f1f] flex gap-4 items-center justify-between rounded-lg py-3 px-4">
                  <button
                    disabled={guestCount <= 0}
                    onClick={() => {
                      decrement(menu.id);
                    }}
                    className="text-yellow-500 text-2xl"
                  >
                    &minus;{" "}
                  </button>
                  <span className="text-white">
                    {/* {guestCount} {`${guestCount > 1 ? "Persons" : "Person"}`} */}
                    {itemId === menu.id ? guestCount : "0"}
                  </span>
                  <button
                    disabled={guestCount >= 10}
                    onClick={() => increment(menu.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &#43;{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
