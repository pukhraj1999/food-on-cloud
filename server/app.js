import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase } from "./db/connect.database.js";
import authRouter from "./router/auth.router.js";
import restaurentRouter from "./router/restaurent.router.js";
import menuRouter from "./router/menu.router.js";

const app = express();

dotenv.config();
connectDatabase();

app.use(bodyParser.json({ limit: "2mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/restaurent", restaurentRouter);
app.use("/api/menu", menuRouter);

app.get("/", (req, res) => {
  return res.json({
    msg: "Welcome to Food Delivery App",
  });
});

const port = process.env.PORT || 5000;
app.listen(port,"0.0.0.0" ,() => {
  console.log(`Server running at port: http://localhost:${port}`);
});
