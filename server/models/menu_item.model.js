import mongoose from "mongoose";

const menuItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    ingredients: {
      type: String,
      require: true,
    },
    currency: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    pictures: [String],
    category_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      require: true,
    },
  },
  { timestamps: true }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
