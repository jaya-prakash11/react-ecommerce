import React from "react";
import Ecommercelogo from "../../assets/img/e-commercelogo.png";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderComponent() {
  const { category } = useSelector((state) => state.category);

  return (
    <div>
      <div className="flex  xs:w-[414px] sm:w-full h-20 border-b-[1px] border-b-[#00000033]  font-titleFont items-center justify-center">
        <div className="flex w-full h-full justify-between items-center lg:mx-32 xs:mx-6">
          {/* <div> */}
          <NavLink to={"/"} className="flex justify-center items-center gap-2">
            <img className="xs:h-5 sm:h-6 lg:h-12 " src={Ecommercelogo}></img>
            <p className="text-black lg:text-lg xs:text-sm   font-bold">
              ShopCart
            </p>
          </NavLink>
          {/* </div> */}
          <div>
            <ul className="flex items-center gap-4">
              <li>
                <NavLink to={`/Product/:2`}>
                  <AiOutlineSearch className=" transform md:text-[22px] xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150  " />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/profile"}>
                  <AiOutlineUser className=" transform md:text-[22px]  xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150 " />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/wishlist"}>
                  <AiOutlineHeart className=" transform md:text-[22px]   xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150" />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>
                  <AiOutlineShoppingCart className=" transform md:text-[22px]  xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150 " />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex w-full h-full justify-between items-center lg:mx-32 xs:mx-6 bg-black"></div> */}
      </div>
      <div className=" xs:hidden md:flex  xs:w-[414px] sm:w-full h-10 border-b-[1px] border-b-[#00000033]  font-titleFont items-center justify-center">
        <ul className="flex gap-4 h-full items-center">
          {category.map((res) => (
            <NavLink
              to={`/ProductListPage/${res}`}
              className="font-bold cursor-pointer"
            >
              {res}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
