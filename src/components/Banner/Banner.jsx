import React, { useState } from "react";
import Banner1 from "../../assets/img/Banner/Banner1.jpg";
import Banner2 from "../../assets/img/Banner/Banner2.jpg";
import Banner3 from "../../assets/img/Banner/Banner3.jpg";
import Banner4 from "../../assets/img/Banner/Banner4.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Banners = [Banner1, Banner2, Banner3, Banner4];

  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide == 3 ? 0 : (prev) => prev + 1);
  };
  console.log("Slide", currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full relative ">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img className="w-screen object-cover h-auto" src={Banners[0]}></img>
          <img className="w-screen object-cover h-auto" src={Banners[1]}></img>
          <img className="w-screen object-cover h-auto" src={Banners[2]}></img>
          <img className="w-screen object-cover h-auto" src={Banners[3]}></img>
        </div>
        <div className="absolute w-fit bottom-5 left-0 right-0 mx-auto flex gap-40">
          <div
            onClick={prevSlide}
            className="flex w-14 h-12 border border-gray-700 justify-center items-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowLeft className="text-lg" />
          </div>
          <div
            onClick={nextSlide}
            className="flex w-14 h-12 border border-gray-700 justify-center items-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowRight className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
