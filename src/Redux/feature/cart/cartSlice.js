import { createSlice, asyncThunkCreator } from "@reduxjs/toolkit";
import { Axios } from "../../Api/apiWrapper";

let initialState = {
  cartItems: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      let index = 0;
      let item = state.cartItems.find((res, ind) => {
        index = ind;
        if (res.id == payload.id) {
          return res;
        }
      });

      if (item) {
        state.cartItems[index] = {
          ...item,
          count: payload.count,
        };
      } else {
        state.cartItems.push({
          ...payload,
        });
      }
    },
    removeFromCart(state, { payload }) {
      state.cartItems = state.cartItems.filter((res) => res.id !== payload.id);
    },
  },
});

export const { addToCart, editCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
