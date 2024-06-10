import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductComponent from "../../components/ProductComponents/ProductComponent";
import ProductComponent2 from "../../components/ProductComponents/ProductComponent2";

export default function Home() {
  return (
    <div className="flex sm:w-full xs:w-[414px] flex-col  xs:px-2 sm:px-3 xl:px-0 h-auto">
      <Banner />
      <ProductComponent title={"EveryDay Shopping"} />
      <ProductComponent2 title={"Electronic Sale"} />
      <ProductComponent title={"Mens clothing"} />
      <ProductComponent title={"Womens clothing"} />
      <ProductComponent title={"Jeweleries"} />
    </div>
  );
}
