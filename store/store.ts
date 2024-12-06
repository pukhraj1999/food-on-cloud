import { configureStore } from "@reduxjs/toolkit";
import restaturentSlice from "@/store/features/restaurentSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    restaurent: restaturentSlice,
    cart: cartSlice,
  },
});
