import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      require: true,
    },
    lastname: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
    },
    password: {
      type: String,
      trim: true,
      require: true,
    },
    address: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "customer",
    },
  },
  { Timestamp: true }
);

const User = mongoose.model("User", userSchema);

export default User;
