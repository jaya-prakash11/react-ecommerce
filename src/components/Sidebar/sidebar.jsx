import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Sidebar({ isOpen, toggleSlideover, side }) {
  return (
    <div
      id="slideover-container"
      className={`w-full h-full fixed inset-0 ${isOpen ? "" : "invisible"}`}
    >
      <div
        onClick={toggleSlideover}
        id="slideover-bg"
        className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
      ></div>
      <div
        id="slideover"
        className={`xs:w-[80vw]  sm:w-[90vw] md:w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={toggleSlideover}
          className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col w-full h-[80vh] pl-3 ">
          <p className="text-xl font-light mt-6">Shopping Cart</p>

          <div className="flex w-full border-b-[1px] border-b-black">
            <div className="flex w-[40%] h-56 justify-center items-center">
              <img
                className="h-[70%] object-cover"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              ></img>
            </div>
            <div className="flex flex-col w-[60%] px-3 pt-5 gap-5">
              <p>Every day Tote</p>
              <p className="text-sm">Price : Rs 20000</p>
              <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
                <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
                <p className="text-xl font-bold cursor-pointer">+</p>
              </div>
              <div className="flex  w-full h-auto gap-4">
                <AiOutlineEdit className="text-[23px] font-bold cursor-pointer" />
                <AiOutlineDelete className="text-[23px] font-bold cursor-pointer" />
              </div>
            </div>
          </div>
          {/* <div className="flex w-full border-b-[1px] border-b-black">
            <div className="flex w-[40%] h-56 justify-center items-center">
              <img
                className="h-[70%] object-cover"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              ></img>
            </div>
            <div className="flex flex-col w-[60%] px-3 pt-5 gap-5">
              <p>Every day Tote</p>
              <p className="text-sm">Price : Rs 20000</p>
              <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
                <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
                <p className="text-xl font-bold cursor-pointer">+</p>
              </div>
              <div className="flex  w-full h-auto gap-4">
                <AiOutlineEdit className="text-[23px] font-bold cursor-pointer" />
                <AiOutlineDelete className="text-[23px] font-bold cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-full border-b-[1px] border-b-black">
            <div className="flex w-[40%] h-56 justify-center items-center">
              <img
                className="h-[70%] object-cover"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              ></img>
            </div>
            <div className="flex flex-col w-[60%] px-3 pt-5 gap-5">
              <p>Every day Tote</p>
              <p className="text-sm">Price : Rs 20000</p>
              <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
                <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
                <p className="text-xl font-bold cursor-pointer">+</p>
              </div>
              <div className="flex  w-full h-auto gap-4">
                <AiOutlineEdit className="text-[23px] font-bold cursor-pointer" />
                <AiOutlineDelete className="text-[23px] font-bold cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-full border-b-[1px] border-b-black">
            <div className="flex w-[40%] h-56 justify-center items-center">
              <img
                className="h-[70%] object-cover"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              ></img>
            </div>
            <div className="flex flex-col w-[60%] px-3 pt-5 gap-5">
              <p>Every day Tote</p>
              <p className="text-sm">Price : Rs 20000</p>
              <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
                <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
                <p className="text-xl font-bold cursor-pointer">+</p>
              </div>
              <div className="flex  w-full h-auto gap-4">
                <AiOutlineEdit className="text-[23px] font-bold cursor-pointer" />
                <AiOutlineDelete className="text-[23px] font-bold cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-full border-b-[1px] border-b-black">
            <div className="flex w-[40%] h-56 justify-center items-center">
              <img
                className="h-[70%] object-cover"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              ></img>
            </div>
            <div className="flex flex-col w-[60%] px-3 pt-5 gap-5">
              <p>Every day Tote</p>
              <p className="text-sm">Price : Rs 20000</p>
              <div className="flex w-28 h-10  border border-black justify-between items-center px-4 rounded-3xl">
                <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
                <p className="text-xl font-bold cursor-pointer">+</p>
              </div>
              <div className="flex  w-full h-auto gap-4">
                <AiOutlineEdit className="text-[23px] font-bold cursor-pointer" />
                <AiOutlineDelete className="text-[23px] font-bold cursor-pointer" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col  w-full  px-5 ">
          <div className="flex w-full justify-between ">
            <p className="text-xl">Subtotal </p>{" "}
            <p className="text-xl">Rs 30000</p>
          </div>

          <div className="flex h-11 justify-start items-end border-b-[1px] border-b-black mt-4">
            <p className="text-sm mb-3">View cart</p>
          </div>
          <div className="flex h-11 justify-start items-end border-b-[1px] border-b-black">
            <p className="text-sm mb-3">Checkout </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
