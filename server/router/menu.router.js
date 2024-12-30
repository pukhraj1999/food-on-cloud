import express from "express";
import { uploadPictures } from "../middleware/picture.middleware.js";
import {
  addMenu,
  getAllMenus,
  getMenu,
  deleteMenu,
  updateMenuItem,
} from "../controller/menu_item.controller.js";

const menuRouter = express.Router();

menuRouter.get("/", getAllMenus);
menuRouter.get("/:id", getMenu);
menuRouter.post("/:id", uploadPictures, addMenu);
menuRouter.put("/:id", updateMenuItem);
menuRouter.delete("/:id", deleteMenu);

export default menuRouter;
