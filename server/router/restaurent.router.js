import express from "express";
import { uploadPictures } from "../middleware/picture.middleware.js";

const restaurentRouter = express.Router();

restaurentRouter.post("/",uploadPictures, (req, res) => {
    res.json({
        location:req.filePath,
        msg:  "File uploaded successfully",
    });
})

export default restaurentRouter;