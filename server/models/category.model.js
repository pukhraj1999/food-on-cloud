import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { Timestamp: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
