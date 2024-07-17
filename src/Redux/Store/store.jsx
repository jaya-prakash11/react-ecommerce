import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../feature/category/CategorySlice";
import ProductReducer from "../feature/product/productSlice";
import CartReducer from "../feature/cart/cartSlice";
import WishlistReducer from "../feature/wishList/wishList";
import UserReducer from "../feature/user/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

let sd = combineReducers({
  category: CategoryReducer,
  product: ProductReducer,
  user: combineReducers({
    userInfo: UserReducer,
    cart: CartReducer,
    wishlist: WishlistReducer,
  }),
});

const persistConfig = {
  key: "root",
  storage,
};

const eShopeReducer = persistReducer(persistConfig, sd);

export const store = configureStore({
  reducer: { eShopeReducer },
});
export const persistor = persistStore(store);
