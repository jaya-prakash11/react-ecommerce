import React, { useEffect } from "react";
import CardComponent from "../../components/Cards/CardComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByCategoryId,
  getProductonCategory,
} from "../../Redux/feature/category/CategorySlice";

export default function ProductPage({}) {
  let { category } = useParams();
  console.log("caeee", category);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategoryId(category));
  }, [category]);
  const products = useSelector(getProductonCategory);

  console.log("paramas", products);

  return (
    <div className="flex flex-col w-full h-auto  xl:px-[15px] 2xl:px-[16%] font-titleFont">
      <div className="mt-5">
        <p className="text-4xl">{category}</p>
      </div>
      <div className="flex w-full h-auto flex-wrap gap-x-7 gap-y-6 mt-7">
        {products.map((res) => (
          <CardComponent
            style={"basic"}
            price={res.price}
            image={res.image}
            title={res.title}
            productId={res.id}
            product={res}
          />
        ))}
      </div>
    </div>
  );
}
