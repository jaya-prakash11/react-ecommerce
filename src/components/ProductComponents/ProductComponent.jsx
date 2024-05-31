import React from "react";
import CardComponent from "../Cards/CardComponent.jsx";

export default function ProductComponent() {
  return (
    <div className=" flex flex-col w-full py-4  xl:px-[9%] 2xl:px-[12%] h-auto">
      <div className="flex flex-col w-full h-auto gap-3">
        <div className="flex w-full h-auto">
          <p className=" xs:text-[20px] sm:text-5xl font-bold">
            Everyday Shopping
          </p>
        </div>
        <div className=" flex w-full  xs:flex-col-reverse  sm:flex-col">
          <div className="flex w-full sm:h-auto lg:h-24 ">
            <div className=" sm:flex w-[80%] h-full xs:hidden text-lg ">
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. It usually begins
                with:
              </p>
            </div>
            <div className=" flex xs:w-[100%] sm:w-[20%] h-full  justify-end items-start xs:pt-3">
              <button className="border border-black h-11 sm:w-56 xs:w-full  xs:text-sm md:text-lg font-bold hover:bg-black hover:text-white ">
                Shop All
              </button>
            </div>
          </div>
          <div className="flex sm:w-full h-auto xs:justify-between md:justify-start lg:gap-x-5 md:gap-x-9 lg: xl:gap-x-2 2xl:justify-between  xs:w-[400px]  flex-wrap xs:gap-y-5 xs:mt-0 sm:mt-5  ">
            <CardComponent style={"basic"} />
            <CardComponent style={"basic"} />
            <CardComponent style={"basic"} />
            <CardComponent style={"basic"} />
            <CardComponent style={"basic"} />
          </div>
        </div>
      </div>
    </div>
  );
}
