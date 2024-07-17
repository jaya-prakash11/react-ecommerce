import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ProductComponent from "../../components/ProductComponents/ProductComponent";
import ProductComponent2 from "../../components/ProductComponents/ProductComponent2";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategory,
  getAllProductsByCategoryId,
} from "../../Redux/feature/category/CategorySlice";
import ProfilePage from "../Profile/profilePage";

export default function Home() {
  const [cate, setCat] = useState();
  const dispatch = useDispatch();
  const { category, allCategoryProducts } = useSelector(
    (state) => state?.eShopeReducer?.category
  );
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    dispatch(getAllProductsByCategoryId(category));
  }, [category]);

  useEffect(() => {
    let ad = {};
    allCategoryProducts.map((res, ind) => {
      let a = Object.keys(res);
      ad[a] = res[a];
    });
    setCat(ad);
  }, [allCategoryProducts]);

  console.log("ProductsSSS", cate);

  return (
    <div className="flex sm:w-full xs:w-[414px] flex-col  xs:px-2 sm:px-3 xl:px-0 h-auto justify-center items-center">
      <Banner />
      <ProductComponent
        value={cate?.electronics}
        to={"electronics"}
        title={"EveryDay Shopping"}
      />
      <ProductComponent2
        value={cate?.electronics}
        to={"electronics"}
        title={"Electronic Sale"}
      />
      <ProductComponent
        value={cate?.[`men's clothing`]}
        to={`men's clothing`}
        title={"Mens clothing"}
      />
      <ProductComponent
        to={`women's clothing`}
        value={cate?.[`women's clothing`]}
        title={"Womens clothing"}
      />
      <ProductComponent
        value={cate?.[`jewelery`]}
        title={"jewelery"}
        to={`jewelery`}
      />
    </div>
  );
}
