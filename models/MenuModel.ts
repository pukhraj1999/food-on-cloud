import CategoryModel from "./CategoryModel";

export default interface MenuModel {
  _id: string;
  name: string;
  ingredients: string;
  category_id: CategoryModel
  price: number;
  pictures: string[];
  currency:string
}
