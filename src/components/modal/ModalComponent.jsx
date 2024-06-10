import React from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
function ModalComponent({
  isAddToCart,
  setIsAddToCart,
  isWishList,
  setIsWishList,
  type = "card" ,
}) {
  return (
    <div
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
            <p className="text-md font-bold">
              {type == "card" ? "Add to Cart" : "Replace Item"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
