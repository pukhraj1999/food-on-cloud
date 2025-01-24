import CartModel from "@/models/CartModel";
import CategoryModel from "@/models/CategoryModel";
import MenuModel from "@/models/MenuModel";
import OrderModel from "@/models/OrderModel";
import RestaurentModal from "@/models/RestaurentModel";
import ThemeModel from "@/models/ThemeModel";
import { themeOptions } from "@/theme";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RestaurentState {
  restaurents?: RestaurentModal[];
  selectedRestaurent?: RestaurentModal;
  fullRestaurent?: RestaurentModal;
  categories?: CategoryModel[];
  selectedCategory?: CategoryModel;
  cart?: CartModel[];
  order?: OrderModel;
  selectedTheme?: ThemeModel;
}

const initialState: RestaurentState = {
  restaurents: [] as RestaurentModal[],
  fullRestaurent: {} as RestaurentModal,
  selectedRestaurent: {} as RestaurentModal,
  categories: [] as CategoryModel[],
  selectedCategory: {} as CategoryModel,
  cart: [] as CartModel[],
  order: {
    totalQuantity: 0,
    subTotal: 0,
    deliveryFee: 0,
    totalAmount: 0,
    discount: 0,
  } as OrderModel,
  selectedTheme: { ...themeOptions[0] } as ThemeModel,
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
      // add price in order
      state.order!.subTotal! += menu.price;
      state.order!.totalQuantity!++;

      // add menu in cart
      if (state.cart!.length > 0) {
        const cartItem = state.cart?.filter((item) => item.menuItem?._id === menu._id)[0];
        if (cartItem) {
          cartItem.quantity!++;
          return;
        }
      }

      state.cart?.push({ menuItem: menu, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<MenuModel>) => {
      const menu = action.payload;
      // remove price in order
      if (state.order!.subTotal! > 0) {
        state.order!.subTotal! -= menu.price;
        state.order!.totalQuantity!--;
      }

      // remove menu from cart
      if (state.cart!.length > 0) {
        const cartItem = state.cart?.filter((item) => item.menuItem?._id === menu._id)[0];

        if (cartItem && cartItem.quantity! > 1) {
          cartItem.quantity!--;
          return;
        } else if (cartItem && cartItem.quantity === 1) {
          state!.cart!.splice(state!.cart!.indexOf(cartItem), 1);
          return;
        }

      }
      state.cart?.push({ menuItem: menu, quantity: 0 });
    },
    calculateTotalAmount: (state) => {
      state.order!.totalAmount = state.order!.subTotal! + state.order!.deliveryFee!;
      if (state.order!.discount! > 0) {
        state.order!.totalAmount! -= state.order?.totalAmount! * (state.order?.discount! / 100);
      }
    },
    applyTheme: (state, action: PayloadAction<ThemeModel>) => {
      state.selectedTheme = action.payload;
    },
  }
});

export const { setRestaurents, setSelectedRestaurent, setCategories, setSelectedCategory, filterMenu, addToCart, removeFromCart, calculateTotalAmount, applyTheme } = restaurentSlice.actions;

export default restaurentSlice.reducer;
