import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import ModalComponent from "../modal/ModalComponent";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/feature/cart/cartSlice";

function SidebarComponent({ product }) {
  let dispatch = useDispatch();
  const [count, setCount] = useState(product?.count);
  const [isAddToCart, setIsAddToCart] = useState(false);

  useEffect(() => {
    setCount(product.count);
  }, [product?.count]);

  useEffect(() => {
    dispatch(addToCart({ ...product, count: count }));
  }, [count]);

  return (
    <div className="flex w-full border-b-[1px] border-b-black">
      <div className="flex w-[40%] h-56 justify-center items-center">
        <img className="h-[70%] object-cover" src={product.image}></img>
      </div>
      <div className="flex flex-col w-[60%] px-3 pt-5 gap-5">
        <p>{product?.title?.substring(0, 10)}</p>
        <p className="text-sm">Price : Rs {product.price}</p>

        <ButtonComponent
          type={"rounded"}
          productCount={count}
          setProductCount={setCount}
        />
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
      </div>
      <ModalComponent
        {...{
          type: "cart",
          isAddToCart,
          setIsAddToCart,
          product,
        }}
      ></ModalComponent>
    </div>
  );
}

export default SidebarComponent;
