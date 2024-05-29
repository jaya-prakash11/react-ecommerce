import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductComponent from "../../components/Product/ProductComponent";

export default function Home() {
  return (
    <div className="flex md:w-full xs:w-[414px] flex-col  h-auto">
      <Banner />
      <ProductComponent />
    </div>
  );
}
