import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from "../controller/category.controller.js";
import { uploadPictures } from "../middleware/picture.middleware.js";
import { restrictImage } from "../middleware/restrictImage.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.post("/", uploadPictures, restrictImage, createCategory);
categoryRouter.put("/:id", uploadPictures, restrictImage, updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
