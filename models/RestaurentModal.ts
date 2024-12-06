import LocationModal from "./LocationModal";
import MenuModal from "./MenuModal";

export default interface RestaurentModal {
  id: string;
  title: string;
  description: string;
  rating: "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "4.5" | "5";
  category: string;
  location: LocationModal;
  review: string;
  pic: string;
  menu: Array<MenuModal>;
}
