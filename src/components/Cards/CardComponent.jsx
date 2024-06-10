import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../modal/ModalComponent";
import WishListPage from "../../pages/Wishlist/WishListPage";

function CardComponent({ style }) {
  let navigation = useNavigate();

  const [isWishList, setIsWishList] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);

  function addToCart() {
    setIsAddToCart(true);
  }

  let cardStyle =
    style == "banner"
      ? "flex flex-col  bg-white border border-gray-200 shadow-2xl   dark:border-neutral-700 sm:h-60 sm:w-48  md:h-56 md:w-52 lg:h-72 lg:w-72 xl:h-60 xl:w-[31%]   2xl:h-72  2xl:w-[32%] cursor-pointer"
      : "flex xs:h-52 xs:w-48    sm:h-72 sm:w-72   md:h-60 md:w-56 lg:h-80 lg:w-80  xl:h-64 xl:w-56    2xl:h-50 2xl:w-[18%] flex-col bg-white border border-gray-200 shadow-2xl dark:border-neutral-700 cursor-pointer";
  return (
    <>
      <div
        onClick={() => {
          navigation("/Product/:1");
          console.log("inside product");
        }}
        class={cardStyle}
      >
        <div class=" flex h- w-full h-[80%] overflow-hidden relative group ">
          <div className=" flex absolute z-50 w-[40px] h-[40px] transition-all duration-500 -right-36 group-hover:right-0 justify-center items-center">
            {" "}
            {!isWishList ? (
              <AiOutlineHeart
                onClick={(e) => {
                  setIsWishList(true);
                  e.stopPropagation();
                }}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <AiFillHeart
                onClick={(e) => {
                  setIsWishList(false);
                  e.stopPropagation();
                }}
                className="text-2xl cursor-pointer text-red-900 "
              />
            )}
          </div>
          <img
            class=" object-cover w-full scale-110 transition-all duration-1000 group-hover:scale-150"
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className=" flex flex-col absolute z-50 w-full h-[30px] bg-red-500 transition-all duration-500 -bottom-36 group-hover:bottom-0 justify-center items-center">
            <div className="flex w-full h-full">
              <div
                onClick={(e) => {
                  addToCart(), e.stopPropagation();
                }}
                className="flex w-full h-full justify-center items-center cursor-pointer bg-black"
              >
                <AiOutlineShoppingCart className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-[20%] flex-col ">
          <div className="flex w-full h-[50%] px-2 font-medium text-[15px]">
            <p>Title</p>
          </div>
          <div className="flex w-full h-[50%] px-2">
            <div className="flex w-full h-[50%] font-normal  text-[15px]">
              Rs 10000
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={`${
          isAddToCart ? "flex" : "hidden"
        } absolute h-[100vh] w-full bg-[#ffffffd4]  z-50 top-0 right-0 items-center justify-center `}
      >
        <div className="flex flex-col xs:h-[400px] xs:w-[390px] bg-white shadow-3xl">
          <div className="flex justify-end">
            <AiOutlineClose
              onClick={() => setIsAddToCart(false)}
              className="text-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col px-3 mt-6">
            <p className="text-3xl font-bold">Mobile Phone</p>
            <p className="text-lg mt-6">Rs. 100.00</p>
            {1 < 2 ? (
              <div>
                <p className="text-lg mt-6">Size Regular</p>
                <p className="text-lg mt-6">Color</p>
              </div>
            ) : (
              none
            )}
            <div className="flex w-full gap-x-5 mt-6">
              <div className="flex w-36 h-10  border border-black justify-between items-center px-4 rounded-sm">
                <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
                <p className="text-xl font-bold cursor-pointer">+</p>
              </div>
              <div className="flex w-10 h-10 border border-black justify-center items-center rounded-sm">
                {!isWishList ? (
                  <AiOutlineHeart
                    onClick={() => setIsWishList(true)}
                    className="text-2xl cursor-pointer"
                  />
                ) : (
                  <AiFillHeart
                    onClick={() => setIsWishList(false)}
                    className="text-2xl cursor-pointer text-red-900 "
                  />
                )}
              </div>
            </div>
            <div className="flex w-full h-10  border border-black justify-between items-center px-4 rounded-sm mt-6  cursor-pointer">
              <p className="text-md font-bold">Add to Cart</p>
            </div>
          </div>
        </div>
      </div> */}
      <ModalComponent
        {...{
          isAddToCart,
          setIsAddToCart,
          isWishList,
          setIsWishList,
        }}
      ></ModalComponent>
    </>
  );
}

export default CardComponent;
