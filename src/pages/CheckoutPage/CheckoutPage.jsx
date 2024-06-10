import React from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full h-auto  xs:px-3 xl:px-[15px] 2xl:px-[16%] font-titleFont ">
      <div className="flex w-full">
        <div className=" flex w-full justify-between h-14 ">
          <div className="flex justify-start items-center gap-2">
            <p>Show order Summary</p>
            <AiOutlineDown />
          </div>
          <div className="flex h-full  items-center">
            <p>Rs 2,398.00</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center gap-4">
        <div className="flex h-20 ">
          <div className="flex h-full w-20 bg-white">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
          </div>
          <div className="flex h-full flex-col ml-6 justify-center  text-left">
            <p>The every day tote</p>
            <p>description</p>
          </div>
          <div className="flex h-full w-[150px]  flex-col justify-center  text-right">
            <p>Rs 1000</p>
          </div>
        </div>
        <div className="flex h-20 ">
          <div className="flex h-full w-20 bg-white">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
          </div>
          <div className="flex h-full flex-col ml-6 justify-center  text-left">
            <p>The every day tote</p>
            <p>description</p>
          </div>
          <div className="flex h-full w-[150px]  flex-col justify-center  text-right">
            <p>Rs 1000</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto gap-3 mt-8">
        <div className="flex justify-between w-full">
          <input className="border border-black h-10 rounded-sm w-72"></input>
          <button className="bg-slate-400 p-2 rounded">Apply</button>
        </div>

        <div className="flex justify-between w-full mt-6">
          <p>Subtotal </p>
          <p>Rs 2,398.00 </p>
        </div>
        <div className="flex justify-between w-full">
          <p>Shipping </p>
          <p>Enter shipping address</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Total </p>
          <p>2,398.00</p>
        </div>
      </div>
      <div className=" flex w-full h-20 items-center justify-between">
        <p>jash.jp24@gmail.com</p>
        <AiOutlineDown />
      </div>
    </div>
  );
}
