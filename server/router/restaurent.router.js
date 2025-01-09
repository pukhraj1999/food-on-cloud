import express from "express";
import { uploadPictures } from "../middleware/picture.middleware.js";
import {
  createRestaurent,
  deleteRestaurent,
  getAllRestaurents,
  getRestaurent,
  updateRestaurent,
} from "../controller/restaurent.controller.js";
import { restrictImage } from "../middleware/restrictImage.js";

const restaurentRouter = express.Router();

restaurentRouter.get("/", getAllRestaurents);
restaurentRouter.get("/:id", getRestaurent);
restaurentRouter.post("/", uploadPictures, restrictImage, createRestaurent);
restaurentRouter.put("/:id", uploadPictures, restrictImage, updateRestaurent);
restaurentRouter.delete("/:id", deleteRestaurent);

export default restaurentRouter;
