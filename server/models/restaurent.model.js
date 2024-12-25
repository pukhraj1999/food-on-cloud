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
    pictures: [pictureSchema],
    menu: [{
      type: mongoose.Schema.ObjectId,
      ref: "MenuItem",
      require: true,
    }],
  },
  { Timestamp: true }
);

const Restaurent = mongoose.model("Restaurent", restaurentSchema);

export default Restaurent;
