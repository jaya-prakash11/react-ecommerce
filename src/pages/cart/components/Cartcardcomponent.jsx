import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import ModalComponent from "../../../components/modal/ModalComponent";
import ButtonComponent from "../../../components/Button";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../Redux/feature/cart/cartSlice";

export default function Cartcardcomponent({ product }) {
  let dispatch = useDispatch();
  const [count, setCount] = useState(product.count || 0);
  const [isWishList, setIsWishList] = useState(false);
  const [isAddToCart, setIsAddToCart] = useState(false);

  useEffect(() => {
    dispatch(addToCart({ ...product, count: count }));
  }, [count]);

  useEffect(() => {
    setCount(product.count || 1);
  }, [product.count]);

  return (
    <div className="xs:flex xs:w-full xs:h-[400px] md:h-[225px] xl:h-[180px] xs:mt-4 border-b border-b-[#00000033] shadow-none gap-x-4 relative">
      <div className="flex w-[160px] justify-start">
        <img
          class=" object-cover xs:w-[16opx] xs:h-32 xs:mt-6"
          src={product.image}
        ></img>
      </div>
      <div className="xs:flex xs:flex-col xs:w-full xl:w-[30%] xs:mt-6 gap-y-3">
        <p className="xs:text-lg">{product?.title.substring(0, 10)}</p>
        <p className="xs:text-sm">Size Regular</p>
        <div className="flex  w-full h-auto gap-4">
          <AiOutlineEdit
            onClick={() => setIsAddToCart(true)}
            className="text-[23px] font-bold cursor-pointer"
          />
          <AiOutlineDelete
            onClick={() => dispatch(removeFromCart(product))}
            className="text-[23px] font-bold cursor-pointer"
          />
        </div>
        <div className="xs:flex md:hidden  xs:flex-col xs:gap-y-3">
          <div className="flex h-1 w-full border   border-b-[#00000033]"></div>
          <p className="xs:text-sm">Rs.{product?.price}</p>
          <div className="flex h-1 w-full border   border-b-[#00000033]"></div>
          <ButtonComponent
            type={"rounded"}
            productCount={count}
            setProductCount={setCount}
          />
          <div className="flex h-1 w-full border   border-b-[#00000033]"></div>
          <p className="xs:text-sm">Rs.{product.price * product.count}</p>
        </div>
        <div className="xs:hidden md:flex xl:hidden w-full absolute left-0 bottom-0  justify-between items-center  border border-black py-3">
          <p className="xs:text-sm">Rs.{product.price}</p>
          <ButtonComponent
            type={"rounded"}
            productCount={count}
            setProductCount={setCount}
          />

          <p className="xs:text-sm">Rs. {product.price * product.count}</p>
        </div>
      </div>
      <div className=" xs:hidden xl:flex w-[70%] justify-between h-full items-center">
        <div className="flex">
          {" "}
          <p className="xs:text-sm">Rs. {product.price}</p>
        </div>
        <div className="flex">
          <ButtonComponent
            type={"rounded"}
            productCount={count}
            setProductCount={setCount}
          />
        </div>
        <div className="flex">
          {" "}
          <p className="xs:text-sm">Rs.{product.price * product.count}</p>
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
        type={"cart"}
      ></ModalComponent>
    </div>
  );
}
