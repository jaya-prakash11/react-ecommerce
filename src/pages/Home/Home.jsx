import React from "react";
import Banner from "../../components/Banner/Banner";
import ProductComponent from "../../components/Product/ProductComponent";

export default function Home() {
  return (
    <div className="flex w-screen flex-col  h-auto">
      <Banner />
      <ProductComponent />
    </div>
  );
}
