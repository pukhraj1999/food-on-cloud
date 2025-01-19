import MenuModel from "./MenuModel";

export default interface RestaurentModal {
  _id: string;
  title: string;
  description: string;
  latitude:string;
  longitude:string;
  pictures: string[];
  menu: MenuModel[];
}
