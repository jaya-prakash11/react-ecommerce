import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function CarouselComponent() {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 768 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 768, min: 640 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 640, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  let data = [1, 2, 3, 4, 5];
  let img =
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <Carousel className="mt-6" responsive={responsive}>
      {data.map((Res) => {
        return (
          <div className="flex flex-col xs:w-[180px] xs:h-[250px] sm:w-[300px] sm:h-[350px] md:w-[240px] md:h-[300px] lg:w-[190px] lg:h-[250px] xl:w-[240px] xl:h-[300px]">
            <div className="flex w-full h-[85%] bg-slate-500 ">
              <img className="object-cover" src={img}></img>
            </div>
            <div className="flex flex-col w-full h-[15%] ">
              <p lassName=" xs:text-xs sm:text-sm lg:text-xs">Title</p>
              <p className=" xs:text-xs sm:text-sm lg:text-xs">Rs 1000.00</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
