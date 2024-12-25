import express from "express";
import { uploadPictures } from "../middleware/picture.middleware.js";
import { createRestaurent } from "../controller/restaurent.controller.js";

const restaurentRouter = express.Router();

restaurentRouter.post("/", uploadPictures,createRestaurent);

export default restaurentRouter;