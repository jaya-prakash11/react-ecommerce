import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { toogleContext } from "../../context/ToogleProvider";
import ModalComponent from "../modal/ModalComponent";
import ButtonComponent from "../Button";
import { NavLink } from "react-router-dom";
import SidebarComponent from "./sidebarComponent";
import { useSelector } from "react-redux";
import { getTotal } from "../../util/util";
import useToogle from "../../hooks/useToogle";

const searchData = [
  { name: "apple" },
  { name: "mango" },
  { name: "bananna" },
  { name: "coconut" },
  { name: "mohanraj" },
  { name: "jayaprakash" },
  { name: "chris" },
];
function Sidebar({ isOpen, toggleSlideover }) {
  const { toogle, setToogle, isSearchOpen, setISearchOpen } =
    useContext(toogleContext);
  const [searchText, setSearcText] = useState("");
  const [searcResult, setSearchResuts] = useState([]);

  const cart = useSelector(
    (state) => state?.eShopeReducer?.user?.cart?.cartItems
  );

  useEffect(() => {
    if (searchText.length !== 0) {
      const data = setTimeout(() => {
        let result = searchData.filter((res) =>
          res.name.includes(searchText.toLowerCase())
        );
        setSearchResuts(result);
      }, 1000);

      return () => clearTimeout(data);
    } else {
      setSearchResuts([]);
    }
  }, [searchText]);

  return (
    <div
      id="slideover-container"
      className={`w-full h-full fixed inset-0 ${isOpen ? "" : "invisible"}`}
    >
      <div
        onClick={toggleSlideover}
        id="slideover-bg"
        className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
      ></div>
      <div
        id="slideover"
        className={`xs:w-[80vw]  sm:w-[90vw] md:w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => {
            setToogle(!toogle), setISearchOpen(false);
          }}
          className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div
          className={`${
            isSearchOpen ? "hidden" : "flex"
          } flex-col justify-start items-start`}
        >
          <p className="text-xl font-light mt-6 mx-3">Shopping Cart</p>
          <div className="flex flex-col w-full h-[75vh] pl-3  overflow-scroll ">
            {cart.length == 0 && (
              <p className="mt-6">Add something to the cart</p>
            )}
            {cart?.map((res) => (
              <SidebarComponent product={res} />
            ))}
          </div>

          {cart.length !== 0 && (
            <div className="flex flex-col  w-full  px-5 ">
              <div className="flex w-full justify-between ">
                <p className="text-xl">Subtostal </p>{" "}
                <p className="text-xl">Rs {getTotal(cart)}</p>
              </div>

              <NavLink
                to={"/cart"}
                onClick={() => setToogle(false)}
                className="flex h-11 justify-start items-end border-b-[1px] border-b-black mt-4"
              >
                <p className="text-sm mb-3">View cart</p>
              </NavLink>
              <div className="flex h-11 justify-start items-end border-b-[1px] border-b-black">
                <p className="text-sm mb-3">Checkout </p>
              </div>
            </div>
          )}
        </div>
        <div
          className={`${
            isSearchOpen ? "flex" : "hidden"
          } flex-col  mt-5    w-[90%] ml-4 `}
        >
          <h1 className="text-2xl">Search</h1>
          <input
            className="border border-neutral-950 p-2 mt-3"
            onChange={(e) => setSearcText(e.target.value)}
          ></input>
          <div className="flex flex-col mt-5 gap-y-3">
            {searcResult?.map((res) => {
              return <p className="text">{res.name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
