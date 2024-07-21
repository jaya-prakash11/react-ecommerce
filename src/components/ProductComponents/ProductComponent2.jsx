import React, { useEffect, useState } from "react";
import CardComponent from "../Cards/CardComponent.jsx";
import { useNavigate } from "react-router-dom";

export default function ProductComponent2({ title, value = [], to = "" }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let slicedProducts = value.slice(0, 6);
    setProducts(slicedProducts);
  }, [value]);

  return (
    <div className=" flex flex-col w-full py-4  xl:px-[15px] 2xl:px-[16%] h-auto">
      <div className="flex flex-col w-full h-auto gap-3">
        <div className="flex w-full h-auto">
          <p className=" xs:text-[20px] sm:text-5xl font-bold">{title}</p>
        </div>
        <div className=" xs:flex sm:hidden w-full  xs:flex-col-reverse  sm:flex-col">
          <div className="flex w-full sm:h-auto lg:h-24 ">
            <div className=" sm:flex w-[80%] h-full xs:hidden text- ">
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
              <button
                onClick={() => {
                  navigate(`/ProductListPage/${to}`);
                }}
                className="border border-black h-11 sm:w-56 xs:w-full  xs:text-sm md:text-lg font-bold hover:bg-black hover:text-white "
              >
                Shop All
              </button>
            </div>
          </div>
          <div className="flex sm:w-full h-auto xs:justify-between md:justify-start lg:gap-x-5 md:gap-x-9 lg: xl:gap-x-2 2xl:justify-between  xs:w-[400px]  flex-wrap xs:gap-y-5 xs:mt-0 sm:mt-5  ">
            {products?.map((res) => (
              <CardComponent
                title={res.title}
                image={res.image}
                price={res.price}
                style={"basic"}
                productId={res.id}
                product={res}
              />
            ))}
          </div>
        </div>
        <div className="   xs:hidden  sm:flex w-full  xs:flex-col-reverse  sm:flex-col ">
          <div className="flex w-full sm:h-auto lg:h-24 ">
            <div className=" sm:flex w-[80%] h-full xs:hidden text- ">
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
          <div className="flex sm:w-full xs:w-[400px] sm: gap-x-2 md:gap-x-8 mt-4">
            <div className="flex w-[35%] sm:h-[750px] lg:h-[950px] xl:h-[550px]  2xl:h-[625px]  bg-black">
              <img
                class=" object-cover w-full h-full cursor-pointer"
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="flex flex-wrap sm:h-[750px] lg:h-[950px] xl:h-[550px] 2xl:h-[625px] w-[65%] xs:justify-between md:justify-start md:gap-x-9 md:gap-y-8 lg:gap-x-11 lg:gap-y-7 xl:gap-x-4 2xl:gap-[2%] xl:gap-y-0">
              {products?.map((res) => (
                <CardComponent
                  title={res.title}
                  image={res.image}
                  price={res.price}
                  style={"banner"}
                  productId={res.id}
                  product={res}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
