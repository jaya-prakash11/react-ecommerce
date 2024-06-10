import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import ModalComponent from "../../../components/modal/ModalComponent";

export default function Cartcardcomponent() {
  const [isWishList, setIsWishList] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  function addToCart() {
    setIsAddToCart(true);
  }
  return (
    <div className="xs:flex xs:w-full xs:h-[400px] md:h-[225px] xl:h-[180px] xs:mt-4 border-b border-b-[#00000033] shadow-none gap-x-4 relative">
      <div className="flex w-[160px] justify-start">
        <img
          class=" object-cover xs:w-[16opx] xs:h-32 xs:mt-6"
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ></img>
      </div>
      <div className="xs:flex xs:flex-col xs:w-full xl:w-[30%] xs:mt-6 gap-y-3">
        <p className="xs:text-lg">Product Title</p>
        <p className="xs:text-sm">Size Regular</p>
        <div className="flex  w-full h-auto gap-4">
          <AiOutlineEdit
            onClick={() => addToCart()}
            className="text-[23px] font-bold cursor-pointer"
          />
          <AiOutlineDelete className="text-[23px] font-bold cursor-pointer" />
        </div>
        <div className="xs:flex md:hidden  xs:flex-col xs:gap-y-3">
          <div className="flex h-1 w-full border   border-b-[#00000033]"></div>
          <p className="xs:text-sm">Rs. 1000.00</p>
          <div className="flex h-1 w-full border   border-b-[#00000033]"></div>
          <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
            <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
            <p className="text-xl font-bold cursor-pointer">+</p>
          </div>
          <div className="flex h-1 w-full border   border-b-[#00000033]"></div>
          <p className="xs:text-sm">Rs. 1000.00</p>
        </div>
        <div className="xs:hidden md:flex xl:hidden w-full absolute left-0 bottom-0  justify-between items-center  border border-black py-3">
          <p className="xs:text-sm">Rs. 1000.00</p>
          <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
            <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
            <p className="text-xl font-bold cursor-pointer">+</p>
          </div>
          <p className="xs:text-sm">Rs. 1000.00</p>
        </div>
      </div>
      <div className=" xs:hidden xl:flex w-[70%] justify-between h-full items-center">
        <div className="flex">
          {" "}
          <p className="xs:text-sm">Rs. 1000.00</p>
        </div>
        <div className="flex">
          <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
            <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
            <p className="text-xl font-bold cursor-pointer">+</p>
          </div>
        </div>
        <div className="flex">
          {" "}
          <p className="xs:text-sm">Rs. 1000.00</p>
        </div>
      </div>
      <ModalComponent
        {...{
          isAddToCart,
          setIsAddToCart,
          isWishList,
          setIsWishList,
        }}
        type={"cart"}
      ></ModalComponent>
    </div>
  );
}
