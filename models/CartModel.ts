import MenuModel from "./MenuModel";

export default interface CartModel {
  id?: string;
  menuItem?: MenuModel;
  quantity?: number;
}
