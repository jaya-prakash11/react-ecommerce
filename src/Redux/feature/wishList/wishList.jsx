import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../Api/apiWrapper";

let initialState = {
  wishlistItems: [],
  iaLoading: false,
};

const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, { payload }) {
      state.wishlistItems.push(payload);
    },
    removeWishlist(state, { payload }) {
      state.wishlistItems = state.wishlistItems.filter(
        (res) => res.id !== payload.id
      );
    },
  },
});

export const { addWishlist, removeWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
