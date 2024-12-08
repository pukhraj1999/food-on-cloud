import RestaurentModal from "@/models/RestaurentModel";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RestaurentState {
  restaurent: RestaurentModal;
}

const initialState: RestaurentState = {
  restaurent: {} as RestaurentModal,
};

export const restaurentSlice = createSlice({
  name: "restaurent",
  initialState,
  reducers: {
    setRestaurent: (state, action: PayloadAction<RestaurentState>) => {
      const { restaurent } = action.payload;
      state.restaurent = restaurent;
    },
  },
});

export const { setRestaurent } = restaurentSlice.actions;

export default restaurentSlice.reducer;
