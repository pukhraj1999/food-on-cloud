import RestaurentModal from "@/models/RestaurentModel";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RestaurentState {
  restaurents?: RestaurentModal[];
  selectedRestaurent?: RestaurentModal;
}

const initialState: RestaurentState = {
  restaurents: [] as RestaurentModal[],
  selectedRestaurent: {} as RestaurentModal,
};

export const restaurentSlice = createSlice({
  name: "restaurent",
  initialState,
  reducers: {
    setRestaurents: (state, action: PayloadAction<RestaurentState>) => {
      const { restaurents } = action.payload;
      state.restaurents = restaurents;
    },
    setSelectedRestaurent: (state, action: PayloadAction<{id:string}>) => {
      const { id } = action.payload;
      state.selectedRestaurent=state.restaurents?.filter((restaurent)=>restaurent._id==id)[0];
    },
  },
});

export const { setRestaurents, setSelectedRestaurent } = restaurentSlice.actions;

export default restaurentSlice.reducer;
