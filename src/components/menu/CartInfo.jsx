import React, { useEffect, useRef } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="px-4 py-2">
      <h1 className="text-[#ababab] text-lg font-semibold tracking-wide">
        order Details
      </h1>
      <div className="mt-4 overflow-y-scroll h-[380px]" ref={scrollRef}>
        {cartData.length === 0 ? (
          <p className="text-[#ababab] flex items-center justify-center text-xs h-[380px]">
            Your cart is empty. Start adding items!
          </p>
        ) : (
          <>
            {cartData.map((data) => (
              <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
                <div className="flex items-center justify-between">
                  <h1 className="font text-[#ababab] semibold text-md tracking-wide">
                    {data.name}
                  </h1>
                  <p className="text-[#ababab] font-semibold">
                    x {data.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <RiDeleteBin2Fill
                      onClick={() => handleDelete(data.id)}
                      size={20}
                      className="text-[#ff0000] cursor-pointer"
                    />
                    <FaNotesMedical
                      size={20}
                      className="text-[#ababab] cursor-pointer"
                    />
                  </div>
                  <p className="text-[#ababab] text-md font-bold">
                    ${data.price}
                  </p>
                </div>
              </div>
            ))}{" "}
          </>
        )}

        {/* <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="font text-[#ababab] semibold text-md tracking-wide">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
              <FaNotesMedical
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
            </div>
            <p className="text-[#ababab] text-md font-bold">$123</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="font text-[#ababab] semibold text-md tracking-wide">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
              <FaNotesMedical
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
            </div>
            <p className="text-[#ababab] text-md font-bold">$123</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="font text-[#ababab] semibold text-md tracking-wide">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
              <FaNotesMedical
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
            </div>
            <p className="text-[#ababab] text-md font-bold">$123</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="font text-[#ababab] semibold text-md tracking-wide">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <RiDeleteBin2Fill
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
              <FaNotesMedical
                size={20}
                className="text-[#ababab] cursor-pointer"
              />
            </div>
            <p className="text-[#ababab] text-md font-bold">$123</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CartInfo;
