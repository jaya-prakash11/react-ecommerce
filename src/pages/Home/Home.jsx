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
  const [cate, setCategory] = useState();
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
    let category = {};
    allCategoryProducts.map((res, ind) => {
      let key = Object.keys(res);
      category[key] = res[key];
    });
    setCategory(category);
  }, [allCategoryProducts]);

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
