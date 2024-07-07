import React from "react";
import CardComponent from "../../components/Cards/CardComponent";
import { useSelector } from "react-redux";

function WishListPage() {
  let wishlistData = useSelector((state) => state.user.wishlist.wishlistItems);
  return (
    <div className="flex flex-col w-full h-auto  xl:px-[15px] 2xl:px-[16%] font-titleFont">
      <div className="mt-5">
        <p className="text-4xl">Wishlist</p>
      </div>
      <div className="flex w-full h-auto flex-wrap gap-x-7 gap-y-6 mt-7">
        {wishlistData?.map((res) => (
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
  );
}

export default WishListPage;
