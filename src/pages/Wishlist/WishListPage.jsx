import React from "react";
import CardComponent from "../../components/Cards/CardComponent";

function WishListPage() {
  return (
    <div className="flex flex-col w-full h-auto  xl:px-[15px] 2xl:px-[16%] font-titleFont">
      <div className="mt-5">
        <p className="text-4xl">Wishlist</p>
      </div>
      <div className="flex w-full h-auto flex-wrap gap-x-7 gap-y-6 mt-7">
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
        <CardComponent style={"basic"} />
      </div>
    </div>
  );
}

export default WishListPage;
