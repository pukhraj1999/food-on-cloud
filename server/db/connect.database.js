import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8"]);

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Successfully connected to Database!!");
  } catch (err) {
    console.log("Failed to connect to Database!!");
    console.log(err);
  }
};
