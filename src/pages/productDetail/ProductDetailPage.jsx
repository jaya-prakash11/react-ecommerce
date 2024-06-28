import React, { useState } from "react";
import CarouselComponent from "./carouselComponent";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWishList, setIsWishList] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);
  let img =
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <div className="flex flex-col w-full h-auto  xs:px-3 xl:px-[15px] 2xl:px-[16%] font-titleFont ">
      <div className="flex h-auto xs:flex-col  md:flex-row w-full auto mt-16">
        <div className="flex md:w-[40%] h-auto  flex-col gap-4">
          <div className="flex xs:h-[400px] sm:h-[500px] w-full">
            {" "}
            <img className="w-full " src={img}></img>
          </div>
          <div className="flex w-full justify-between gap-1">
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28"
              src={img}
            ></img>
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28"
              src={img}
            ></img>
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28"
              src={img}
            ></img>
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28"
              src={img}
            ></img>
          </div>
        </div>
        <div className="flex flex-col xs:w-[90%] md:w-[60%] gap-y-7 md:pl-8  xs:mt-10   ">
          <p className="font-bold text-4xl">every daya carry tote</p>
          <p>Rs 899.00</p>
          <p>Regular</p>
          <div className="flex w-full gap-x-5 mt-6">
            <div className="flex w-36 h-10  border border-black justify-between items-center px-4 rounded-sm">
              <p className="text-2xl font-bold cursor-pointer">-</p> <p>2</p>{" "}
              <p className="text-xl font-bold cursor-pointer">+</p>
            </div>
            <div className="flex w-40 h-10  border border-black justify-between items-center px-4 rounded-sm  cursor-pointer">
              <p className="text-md font-bold">Add to Cart</p>
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
          <div
            className="flex w-[50%] h-10  border border-black justify-center
           items-center px-4 rounded-sm  cursor-pointer "
          >
            <p className="text-md font-bold">Buy Now</p>
          </div>
          <div className="flex flex-col h-auto xs:w-full ms:w-[50%]">
            <p className="font-bold">Product Description</p>
            <p>
              {" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
            </p>
            <p className="font-bold mt-5">key Featues</p>
            <p className="font-bold  mt-5">Kare instructions</p>
            <p>
              {" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex h-auto w-full mt-9"> */}
      <CarouselComponent></CarouselComponent>
      {/* </div> */}
    </div>
  );
}

export default ProductDetailPage;
