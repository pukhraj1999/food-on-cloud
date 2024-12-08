import LocationModel from "./LocationModel";
import MenuModel from "./MenuModel";

export default interface RestaurentModal {
  id: string;
  title: string;
  description: string;
  rating: "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "4.5" | "5";
  location: LocationModel;
  review: string;
  pic: string;
  menu: Array<MenuModel>;
}
