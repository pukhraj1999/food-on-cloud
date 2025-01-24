import CartModel from "@/models/CartModel";
import CategoryModel from "@/models/CategoryModel";
import MenuModel from "@/models/MenuModel";
import RestaurentModal from "@/models/RestaurentModel";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RestaurentState {
  restaurents?: RestaurentModal[];
  selectedRestaurent?: RestaurentModal;
  fullRestaurent?: RestaurentModal;
  categories?: CategoryModel[];
  selectedCategory?: CategoryModel;
  cart?: CartModel[];
}

const initialState: RestaurentState = {
  restaurents: [] as RestaurentModal[],
  fullRestaurent: {} as RestaurentModal,
  selectedRestaurent: {} as RestaurentModal,
  categories: [] as CategoryModel[],
  selectedCategory: {} as CategoryModel,
  cart: [] as CartModel[]
};

export const restaurentSlice = createSlice({
  name: "restaurent",
  initialState,
  reducers: {
    setRestaurents: (state, action: PayloadAction<RestaurentState>) => {
      const { restaurents } = action.payload;
      state.restaurents = restaurents;
    },
    setSelectedRestaurent: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.selectedRestaurent = state.restaurents?.filter((restaurent) => restaurent._id == id)[0];
      state.fullRestaurent = state.selectedRestaurent;
    },
    setCategories: (state, action: PayloadAction<RestaurentState>) => {
      const { categories } = action.payload;
      state.categories = categories?.reverse();
    },
    setSelectedCategory: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.selectedCategory = state.categories?.filter((category) => category._id == id)[0];
    },
    filterMenu: (state) => {
      if (state.selectedCategory?.name === "All") {
        state.selectedRestaurent = state.fullRestaurent;
        return;
      }
      const filterRestaurent = { ...state.fullRestaurent, menu: state.fullRestaurent?.menu?.filter((menuItem) => menuItem.category_id._id === state.selectedCategory?._id) };
      state.selectedRestaurent = filterRestaurent as RestaurentModal;
    },
    addToCart: (state, action: PayloadAction<MenuModel>) => {
      const menu = action.payload;
      if(state.cart!.length > 0){
        const cartItem = state.cart?.filter((item) => item.menuItem?._id === menu._id)[0];
        if(cartItem){
          cartItem.quantity!++;
          return;
        }
      }
      state.cart?.push({ menuItem: menu, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<MenuModel>) => {
      const menu = action.payload;
      if(state.cart!.length > 0){
        const cartItem = state.cart?.filter((item) => item.menuItem?._id === menu._id)[0];
        if(cartItem){
          cartItem.quantity!--;
          return;
        }
      }
      state.cart?.push({ menuItem: menu, quantity: 0 });
    }
  },
});

export const { setRestaurents, setSelectedRestaurent, setCategories, setSelectedCategory, filterMenu, addToCart, removeFromCart } = restaurentSlice.actions;

export default restaurentSlice.reducer;
