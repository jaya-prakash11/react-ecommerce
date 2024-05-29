import React from "react";

function FooterComponent() {
  return (
    <div className="flex w-full xs:h-[1000px] md:h-72 bg-black px-[12%] text-white">
      <div className="grid  w-full  md:grid-cols-4  xs:grid-cols-1 xs:grid-rows-4 md:grid-rows-1  mt-8">
        <div className="grid grid-flow-row">
          <div className="flex flex-col">
            <p className="font-medium">Home</p>
            <ul className="flex flex-col gap-1 mt-2">
              <li className="font-thin cursor-pointer">Our Story</li>
              <li className="font-thin cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col xs:mt-6 md:mt-9">
            <p className="font-medium">Need Help ?</p>
            <ul className="flex flex-col mt-2 gap-1">
              <li className="font-thin cursor-pointer">1234567890</li>
              <li className="font-thin cursor-pointer">3456789012</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col xs:mt-6 md:mt-0">
          <p className="font-medium">Support</p>
          <ul className="flex flex-col mt-2 gap-1">
            <li className="font-thin cursor-pointer">FAQ</li>
            <li className="font-thin cursor-pointer">Terms & Conditions</li>
            <li className="font-thin cursor-pointer">Privacy Policy</li>
            <li className="font-thin cursor-pointer">Shipping Policy</li>
            <li className="font-thin cursor-pointer">Return & Refund Policy</li>
          </ul>
        </div>
        <div className="flex flex-col xs:mt-6 md:mt-0 h-auto">
          <p className="font-medium">Shop</p>
          <ul className="flex flex-col mt-2 gap-1">
            <li className="font-thin cursor-pointer">Electronic</li>
            <li className="font-thin cursor-pointer">Jewellery</li>
            <li className="font-thin cursor-pointer">Men's Clothing</li>
            <li className="font-thin cursor-pointer">Womens's Clothing</li>
          </ul>
        </div>
        <div className="flex flex-col h-full">
          <p>Be the first to Know</p>
          <input className=" h-10 w-[70%] rounded-sm mt-2 text-black font-titleFont font-medium bg-slate-100 "></input>
          <button className=" h-10 w-[70%] border border-white rounded-md hover:bg-white hover:text-black  font-bold mt-5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
