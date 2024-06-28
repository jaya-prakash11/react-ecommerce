import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../Api/apiWrapper";

// GET category
export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (paylaod, thunkkit) => {
    try {
      let res = await Axios.get("/products/categories");
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getProductsByCategoryId = createAsyncThunk(
  "category/getProduct",
  async (category, thunkkit) => {
    try {
      let res = await Axios.get(`products/category/${category}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllProductsByCategoryId = createAsyncThunk(
  "category/getAllProduct",
  async (categoryArr, thunkkit) => {
    try {
      console.log("inside cas", categoryArr);

      // categoryArr.forEach((element) => {
      //   res = promise.any(Axios.get(`products/category/${element}`));
      // });

      let res = await Promise.all(
        categoryArr.map(async (element) => {
          let products = await Axios.get(`products/category/${element}`);
          return {
            [element]: products,
          };
        })
      );

      console.log("getAllProductsByCategoryId", res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  category: [],
  products: [],
  allCategoryProducts: [],
  isloading: false,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        state.isloading = false;
        state.category = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isloading = false;
      })
      .addCase(getProductsByCategoryId.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getProductsByCategoryId.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        state.isloading = false;
        state.products = action.payload;
      })
      .addCase(getProductsByCategoryId.rejected, (state, action) => {
        state.isloading = false;
      })
      .addCase(getAllProductsByCategoryId.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getAllProductsByCategoryId.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        state.isloading = false;
        state.allCategoryProducts = action.payload;
      })
      .addCase(getAllProductsByCategoryId.rejected, (state, action) => {
        state.isloading = false;
      });
  },
});
export const {} = categorySlice.actions;

export default categorySlice.reducer;

export const getProductonCategory = (state) => state.category.products;
