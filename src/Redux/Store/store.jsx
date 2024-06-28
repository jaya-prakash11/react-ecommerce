import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../feature/Category/categorySlice";

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
  },
});
