import mongoose from "mongoose";
import locationSchema from "./location.model";

const restaurentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    location: locationSchema,
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    picture_id: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Picture",
      },
    ],
  },
  { Timestamp: true }
);

const Restaurent = mongoose.model("Restaurent", restaurentSchema);

export default Restaurent;
