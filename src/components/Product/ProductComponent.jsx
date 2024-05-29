import React from "react";
import CardComponent from "../Cards/CardComponent.jsx";

export default function ProductComponent() {
  return (
    <div className=" flex flex-col w-full py-4  xs:px-3    md:px-[12%]  h-auto">
      <div className="flex flex-col w-full h-auto gap-3">
        <div className="flex w-full h-auto">
          <p className=" xs:text-[20px] md:text-5xl font-bold">
            Everyday Shopping
          </p>
        </div>
        <div className="flex w-full h-16">
          <div className=" md:flex w-[80%] h-full xs:hidden  ">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
          </div>
          <div className=" flex xs:w-[100%] md:w-[20%] h-full  justify-end items-center">
            <button className="border border-black h-11 md:w-56 xs:w-full  xs:text-sm md:text-lg font-bold hover:bg-black hover:text-white ">
              Shop All
            </button>
          </div>
        </div>
        <div className="flex md:w-full h-auto  justify-between  xs:w-[414px] flex-wrap ">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
