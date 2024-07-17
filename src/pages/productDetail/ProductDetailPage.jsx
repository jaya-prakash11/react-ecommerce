import React, { useEffect, useState } from "react";
import CarouselComponent from "./carouselComponent";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  getNumberOfProducts,
  getProductById,
  useGetNumberOfProducts,
} from "../../Redux/feature/product/productSlice";

import { addToCart } from "../../Redux/feature/cart/cartSlice";
import {
  addWishlist,
  removeWishlist,
} from "../../Redux/feature/wishList/wishList";
import ButtonComponent from "../../components/Button";
import { Button, Modal } from "antd";

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const cart = useSelector(
    (state) => state?.eShopeReducer?.user?.cart?.cartItems
  );
  const product = useSelector(getProductById);
  const numberOfProduct = useSelector(useGetNumberOfProducts);
  const wishList = useSelector(
    (state) => state?.eShopeReducer?.user?.wishlist?.wishlistItems
  );
  let cartedProduct = cart.find((res) => res.id == product.id);

  const [count, setCount] = useState(cartedProduct?.count || 1);

  let isWishListAdded = wishList?.some((res) => res.id == product.id);

  useEffect(() => {
    dispatch(getProductDetail(productId));
    dispatch(getNumberOfProducts(5));
  }, [productId]);

  // useEffect(() => {
  //   if (count !== 0) {
  //     dispatch(addToCart({ ...product, count: count }));
  //   }
  // }, [count]);

  let img = product?.image
    ? product?.image
    : "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  console.log("tets", cartedProduct?.count);
  return (
    <div className="flex flex-col w-full h-auto  xs:px-3 xl:px-[15px] 2xl:px-[16%] font-titleFont ">
      <div className="flex h-auto xs:flex-col  md:flex-row w-full auto mt-16">
        <div className="flex md:w-[40%] h-auto  flex-col gap-4">
          <div className="flex xs:h-[400px] sm:h-[500px] w-full cursor-pointer">
            {" "}
            <img className="w-full " src={img}></img>
          </div>
          <div className="flex w-full justify-between gap-1">
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28 cursor-pointer"
              src={img}
            ></img>
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28 cursor-pointer"
              src={img}
            ></img>
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28 cursor-pointer"
              src={img}
            ></img>
            <img
              className="w-[23%] xs:h-24 sm:h-28 md:h-16 xl:h-28 cursor-pointer"
              src={img}
            ></img>
          </div>
        </div>
        <div className="flex flex-col xs:w-[90%] md:w-[60%] gap-y-7 md:pl-8  xs:mt-10   ">
          <p className="font-bold text-4xl">{product?.title}</p>
          <p>Rs {product?.price}</p>
          <p>Rating: {product?.rating?.rate}</p>
          <p>Num of orders in previous month: {product?.rating?.count}</p>
          <div className="flex w-full gap-x-5 mt-6">
            <ButtonComponent productCount={count} setProductCount={setCount} />
            <button
              onClick={() => dispatch(addToCart({ ...product, count: count }))}
              className="border border-black h-10 sm:w-56 xs:w-full  xs:text-sm md:text-lg font-bold hover:bg-black hover:text-white "
            >
              Add to cart
            </button>
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
          <div
            className="flex w-[50%] h-10  border border-black justify-center
           items-center px-4 rounded-sm  cursor-pointer "
          >
            <p className="text-md font-bold">Buy Now</p>
          </div>
          <div className="flex flex-col h-auto xs:w-full ms:w-[50%]">
            <p className="font-bold">Product Description</p>
            <p> {product?.description}</p>
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
      <CarouselComponent data={numberOfProduct}></CarouselComponent>
    </div>
  );
}

export default ProductDetailPage;
