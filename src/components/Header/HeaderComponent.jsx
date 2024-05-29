import React from "react";
import Ecommercelogo from "../../assets/img/e-commercelogo.png";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function HeaderComponent() {
  return (
    <div className="flex w-full h-20 border-b-2 border-b-black  font-titleFont items-center justify-center">
      <div className="flex w-full h-full justify-between items-center lg:mx-32 xs:mx-6">
        <div className="flex justify-center items-center gap-2">
          <img className="xs:h-5 sm:h-6 lg:h-12 " src={Ecommercelogo}></img>
          <p className="text-black lg:text-lg xs:text-sm   font-bold">
            ShopCart
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <AiOutlineSearch className=" transform md:text-[22px] xs:text-[15px] cursor-pointer transition duration-500 hover:scale-150  " />
            </li>
            <li>
              <AiOutlineUser className=" transform md:text-[22px]  xs:text-[15px] cursor-pointer transition duration-500 hover:scale-150 " />
            </li>
            <li>
              <AiOutlineHeart className=" transform md:text-[22px]   xs:text-[15px] cursor-pointer transition duration-500 hover:scale-150" />
            </li>
            <li>
              <AiOutlineShoppingCart className=" transform md:text-[22px]  xs:text-[15px] cursor-pointer transition duration-500 hover:scale-150 " />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
