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
import {
  addWishlist,
  removeWishlist,
} from "../../Redux/feature/wishList/wishList";
import { useDispatch, useSelector } from "react-redux";

function CardComponent({ style, price, image, title, productId, product }) {
  const dispatch = useDispatch();

  console.log("productId", productId);
  let navigation = useNavigate();
  const wishList = useSelector(
    (state) => state?.eShopeReducer?.user?.wishlist?.wishlistItems
  );
  let isWishListAdded = wishList?.some((res) => res.id == productId);

  const [isWishList, setIsWishList] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);

  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  let productImage = image ? image : DEFAULT_IMAGE;

  let productTitle = title?.substring(0, 10);
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
        onClick={(e) => {
          navigation(`/Product/${productId}`);
          console.log("inside product");
          // e.stopPropagation();
        }}
        class={cardStyle}
      >
        <div class=" flex h- w-full h-[80%] overflow-hidden relative group  justify-center items-center">
          <div className=" flex absolute z-50 w-[40px] h-[40px] transition-all duration-500   -right-36 group-hover:right-0 top-0  justify-center items-center">
            {" "}
            {isWishListAdded ? (
              <AiFillHeart
                onClick={(e) => {
                  dispatch(removeWishlist(product));
                  e.stopPropagation();
                }}
                className="text-2xl cursor-pointer text-red-900 "
              />
            ) : (
              <AiOutlineHeart
                onClick={(e) => {
                  dispatch(addWishlist(product));
                  e.stopPropagation();
                }}
                className="text-2xl cursor-pointer "
              />
            )}
          </div>
          <img
            class="  w-[80%] h-[80%] scale-110 transition-all duration-1000 group-hover:scale-150"
            src={productImage}
            alt=""
          />
          <div className=" flex flex-col absolute z-50 w-full h-[30px] bg-red-500 transition-all duration-500 lg:-bottom-36 xs:bottom-0 lg:group-hover:bottom-0 justify-center items-center">
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
            <p>{productTitle}</p>
          </div>
          <div className="flex w-full h-[50%] px-2">
            <div className="flex w-full h-[50%] font-normal  text-[15px]">
              Rs. {price}
            </div>
          </div>
        </div>
      </div>
      <ModalComponent
        {...{
          isAddToCart,
          setIsAddToCart,
          isWishList,
          setIsWishList,
          product,
        }}
      ></ModalComponent>
    </>
  );
}

export default CardComponent;
