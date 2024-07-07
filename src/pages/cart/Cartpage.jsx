import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Cartcardcomponent from "./components/Cartcardcomponent";
import { useSelector } from "react-redux";
import { getTotal } from "../../util/util";
export default function Cartpage() {
  const cartData = useSelector((state) => state.user.cart.cartItems);
  return (
    <div className="flex flex-col w-full h-auto  xs:px-3 xl:px-[15px] 2xl:px-[16%] font-titleFont ">
      <div className="xs:hidden xl:flex w-full h-14 items-center justify-between xl:mt-5">
        <p>Product</p>
        <p className="ml-[140px]">Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      {cartData.map((res) => {
        return <Cartcardcomponent product={res} />;
      })}

      <div className="flex xs:flex-col md:flex-row md:justify-between w-full h-auto mt-8">
        <div className=" flex flex-col gap-y-4">
          <p className="xs:text-center md:text-left">Coupon:</p>
          <p className="s:text-center md:text-left">
            Coupon code will work on Checkout page
          </p>
          <input className=" h-10 w-full rounded-sm mt-2 text-black font-titleFont font-medium   border border-black px-2"></input>
        </div>
        <div>
          <div className="flex w-full xs:justify-center md:justify-end mt-5 gap-5">
            <p className="xs:text-lg">SUBTOTAL :</p>
            <p className="xs:text-lg">{getTotal(cartData)}</p>
          </div>
          <p className="xs:text-sm xs:text-center md:text-right mt-5">
            Taxes and Shipping Calculate at Checkout
          </p>
          <div className="flex w-full xs:justify-center md:justify-end mt-5 gap-3">
            <input type={"checkbox"} className="w-3"></input>
            <p className="xs:text-base">I aggree with terms and conditions</p>
          </div>
          <div className="flex w-full h-10   border border-black justify-between items-center px-4 rounded-3xl mt-5 bg-black cursor-pointer">
            <p className="text-sm font-bold text-white ">CHECK OUT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
