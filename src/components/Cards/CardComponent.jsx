import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function CardComponent() {
  const [isWishList, setIsWishList] = useState(false);
  return (
    <>
      <div class="flex h-72 w-64 flex-col bg-white border border-gray-200 shadow-sm   dark:border-neutral-700 ">
        <div class=" flex  w-full h-[80%] overflow-hidden relative group">
          <div className=" flex absolute z-50 w-[40px] h-[40px] transition-all duration-500 -right-36 group-hover:right-0 justify-center items-center">
            {" "}
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
          <img
            class=" object-cover w-full scale-110 transition-all duration-1000 group-hover:scale-150"
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className=" flex flex-col absolute z-50 w-full h-[30px] bg-red-500 transition-all duration-500 -bottom-36 group-hover:bottom-0 justify-center items-center">
            <div className="flex w-full h-full">
              <div className="flex w-full h-full justify-center items-center cursor-pointer bg-black">
                <AiOutlineShoppingCart className="text-xl text-white" />
              </div>
              {/* <div
                className=" overlay transition-opacity 
                        duration-500 ease-in-out 
                        absolute top-0 left-0 w-full 
                        h-full bg-black bg-opacity-50 
                        flex justify-center items-center 
                        opacity-0 text-white"
              >
                cart{" "}
              </div> */}
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
    </>
  );
}

export default CardComponent;
