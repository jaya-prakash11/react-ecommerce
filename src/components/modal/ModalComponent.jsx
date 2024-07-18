import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { Button, Modal } from "antd";
import ButtonComponent from "../Button/index";
import {
  addWishlist,
  removeWishlist,
} from "../../Redux/feature/wishList/wishList";
import { addToCart } from "../../Redux/feature/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ModalComponent({
  isAddToCart,
  setIsAddToCart,
  type = "card",
  product = {},
}) {
  const dispatch = useDispatch();
  const wishList = useSelector(
    (state) => state?.eShopeReducer?.user?.wishlist?.wishlistItems
  );
  const cart = useSelector(
    (state) => state?.eShopeReducer?.user?.cart?.cartItems
  );
  let isWishListAdded = wishList?.some((res) => res.id == product.id);
  const [count, setCount] = useState(product?.count || 1);
  let isAddedToCart = cart.find((res) => res.id == product.id) || {};

  useEffect(() => {
    setCount(product?.count || 1);
  }, [product?.count]);

  return (
    <Modal
      centered
      open={isAddToCart}
      footer={null}
      width={450}
      onCancel={() => setIsAddToCart(false)}
    >
      <div className="flex flex-col xs:h-[400px] ">
        <div className="flex flex-col px-3 mt-6">
          <p className="text-3xl font-bold">
            {product?.title?.substring(0, 10)}
          </p>
          <p className="text-lg mt-6 font-sans font-medium">
            Rs {product?.price}
          </p>
          {1 < 2 ? (
            <div>
              <p className="text-lg mt-6 font-sans font-medium">
                Rating: {product?.rating?.rate}
              </p>
              <p className="text-lg mt-6 font-sans font-medium">
                Count: {product?.rating?.count}
              </p>
            </div>
          ) : (
            none
          )}
          <div className="flex w-full gap-x-5 mt-6">
            <ButtonComponent productCount={count} setProductCount={setCount} />
            <div className="flex w-10 h-10 border border-black justify-center items-center rounded-sm">
              {isWishListAdded ? (
                <AiFillHeart
                  onClick={() => dispatch(removeWishlist(product))}
                  className="text-2xl cursor-pointer text-red-900 "
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => dispatch(addWishlist(product))}
                  className="text-2xl cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            onClick={() => {
              dispatch(
                addToCart({
                  ...product,
                  count:
                    Object.keys(isAddedToCart).length !== 0 && type == "card"
                      ? isAddedToCart?.count + count
                      : count,
                })
              );
              setIsAddToCart(false);
              if (type == "card") {
                setCount(1);
              }
            }}
            className="border border-black h-10 xl:w-full sm:w-56 xs:w-full text-md font-bold hover:bg-black hover:text-white px-4  mt-6 "
          >
            <p className="text-left">Add to cart</p>
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalComponent;
