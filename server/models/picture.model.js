import mongoose from "mongoose";

const pictureSchema = mongoose.Schema(
  {
    img: {
      type: String,
      require: true,
    },
  }
);

export default pictureSchema;
