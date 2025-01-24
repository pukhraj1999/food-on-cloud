import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaturentSlice, { RestaurentState } from "@/store/features/restaurentSlice";

export interface RootState {
  restaurentReducer: RestaurentState
}

const reducer = combineReducers({ restaurentReducer: restaturentSlice})

export const store = configureStore({
  reducer: reducer
});
