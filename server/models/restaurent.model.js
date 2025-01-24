import mongoose from "mongoose";

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
    latitude: {
      type: String,
      require: true,
    },
    longitude: {
      type: String,
      require: true,
    },
    pictures: [String],
    menu: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "MenuItem",
        require: true,
      },
    ],
  },
  { timestamps: true }
);

const Restaurent = mongoose.model("Restaurent", restaurentSchema);

export default Restaurent;
