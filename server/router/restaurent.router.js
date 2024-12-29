import express from "express";
import { uploadPictures } from "../middleware/picture.middleware.js";
import {
  createRestaurent,
  deleteRestaurent,
  getAllRestaurents,
  getRestaurent,
  updateRestaurent,
} from "../controller/restaurent.controller.js";

const restaurentRouter = express.Router();

restaurentRouter.get("/", getAllRestaurents);
restaurentRouter.get("/:id", getRestaurent);
restaurentRouter.post("/", uploadPictures, createRestaurent);
restaurentRouter.put("/:id", updateRestaurent);
restaurentRouter.delete("/:id", deleteRestaurent);

export default restaurentRouter;
