import mongoose from "mongoose";

const pictureSchema = mongoose.Schema(
  {
    img: {
      type: String,
      require: true,
    },
  },
  { Timestamp: true }
);

const Picture = mongoose.model("Picture", pictureSchema);

export default Picture;
