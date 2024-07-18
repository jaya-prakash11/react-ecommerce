import React, { useContext } from "react";
import Ecommercelogo from "../../assets/img/e-commercelogo.png";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toogleContext } from "../../context/ToogleProvider";
import useAuth from "../../hooks/useAuth";

function HeaderComponent() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { category } = useSelector((state) => state.eShopeReducer.category);
  const { toogle, setToogle, isSearchOpen, setISearchOpen } =
    useContext(toogleContext);
  const { cart, wishlist } = useSelector((state) => state?.eShopeReducer?.user);

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
                <NavLink
                  onClick={() => {
                    setToogle(true), setISearchOpen(true);
                  }}
                >
                  <AiOutlineSearch className=" transform md:text-[22px] xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150  " />
                </NavLink>
              </li>
              <li>
                <NavLink to={auth.accesstoken ? "/profile" : "/login"}>
                  <AiOutlineUser className=" transform md:text-[22px]  xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150 " />
                </NavLink>
              </li>
              <li className="relative">
                <ul
                  className=" transform md:text-[22px]  xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150 "
                  onClick={() =>
                    navigate(auth.accesstoken ? "/wishlist" : "/login")
                  }
                >
                  <div className="flex rounded-xl   h-3 w-3 bg-black absolute bottom-3 right-0 justify-center items-center">
                    {" "}
                    <p className="text-white text-[11px]">
                      {wishlist?.wishlistItems?.length}
                    </p>
                  </div>
                  <AiOutlineHeart />
                </ul>
              </li>
              <li className="relative">
                <ul
                  className=" transform md:text-[22px]  xs:text-[20px] cursor-pointer transition duration-500 hover:scale-150 "
                  onClick={() => setToogle(true)}
                >
                  <div className="flex rounded-xl   h-3 w-3 bg-black absolute bottom-3 right-0 justify-center items-center">
                    <p className="text-white text-[11px]">
                      {cart.cartItems.length}
                    </p>
                  </div>
                  <AiOutlineShoppingCart />
                </ul>
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
