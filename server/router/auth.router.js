import express from "express";
import { tokenIsValid, signup, signin } from "../controller/auth.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/tokenisvalid", tokenIsValid);

authRouter.get("/", (req, res) => {
  res.json({
    msg: "auth Route Working!!",
  });
});

export default authRouter;
