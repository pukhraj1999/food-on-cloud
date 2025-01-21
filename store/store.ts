import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaturentSlice, { RestaurentState } from "@/store/features/restaurentSlice";
import cartSlice, { CartState } from "./features/cartSlice";

export interface RootState {
  restaurentReducer: RestaurentState
  cartReducer: CartState
}

const reducer = combineReducers({ restaurentReducer: restaturentSlice, createReducer: cartSlice })

export const store = configureStore({
  reducer: reducer
});
