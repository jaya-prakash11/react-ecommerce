import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../feature/category/CategorySlice";
import ProductReducer from "../feature/product/productSlice";
import CartReducer from "../feature/cart/cartSlice";
import WishlistReducer from "../feature/wishList/wishList";

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    product: ProductReducer,
    user: combineReducers({
      cart: CartReducer,
      wishlist: WishlistReducer,
    }),
  },
});
