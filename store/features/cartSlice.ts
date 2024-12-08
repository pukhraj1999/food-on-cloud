import CartModal from "@/models/CartModel";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: Array<CartModal>;
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {
      state.cartItems = [...state.cartItems, ...action.payload.cartItems];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const cartItemIdx = state.cartItems.findIndex(
        (item) => item.id == action.payload
      );
      if (cartItemIdx >= 0) {
        state.cartItems = state.cartItems.splice(cartItemIdx, 1);
      } else {
        console.log("Can't remove the item that is not added to the cart");
      }
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
