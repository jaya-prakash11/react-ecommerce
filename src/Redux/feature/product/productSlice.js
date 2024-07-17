import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../Api/apiWrapper";

let initialState = {
  productDetails: {},
  getNumberOfProducts: [],
  isloading: false,
};

export const getProductDetail = createAsyncThunk(
  "product/getSingleProductdetail",
  async (payload, thunkkit) => {
    try {
      let res = await Axios.get(`/products/${payload}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getNumberOfProducts = createAsyncThunk(
  "product/getNumberOfProducts",
  async (payload, thunkkit) => {
    try {
      let res = await Axios.get(`/products?limit=${payload}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isloading = false;
        state.productDetails = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.isloading = false;
      })
      .addCase(getNumberOfProducts.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getNumberOfProducts.fulfilled, (state, action) => {
        state.isloading = false;
        state.getNumberOfProducts = action.payload;
      })
      .addCase(getNumberOfProducts.rejected, (state, action) => {
        state.isloading = false;
      });
  },
});

export default productSlice.reducer;

export const {} = productSlice.actions;

export const getProductById = (state) =>
  state?.eShopeReducer?.product.productDetails;
export const useGetNumberOfProducts = (state) =>
  state?.eShopeReducer?.product.getNumberOfProducts;
