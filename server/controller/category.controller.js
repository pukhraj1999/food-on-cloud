import Category from "../models/category.model.js";
import { rollbackPictures } from "../utils/rollback.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.json({
      success: true,
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    return res.json({
      success: true,
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || req.filePath.length < 1) {
      rollbackPictures(req.filePath);
      return res.status(422).json({
        success: false,
        msg: "All fields must be filled.",
      });
    }

    const categoryExist = await Category.findOne({ name: name });

    if (categoryExist) {
      return res.status(422).json({
        success: false,
        msg: "Category with name " + name + " already exist.",
      });
    }

    const category = new Category({
      name,
      pictures: req.filePath,
    });
    const savedCategory = await category.save();

    return res.json({
      success: true,
      category: savedCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(422).json({
        success: false,
        msg: "Category name is required.",
      });
    }

    const category = await Category.findById(id);
    if (!category) {
      res.status(422).json({
        success: false,
        msg: "Category with id " + id + " not Exist.",
      });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          pictures: req.filePath.length > 0 ? req.filePath : category.pictures,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    return res.json({
      success: true,
      category: updatedCategory,
      msg: "Category successfully updated.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(400).json({
        success: false,
        msg: "Category with " + id + " not Exist.",
      });
    }

    await Category.deleteOne({ _id: id });
    rollbackPictures(category.pictures);

    return res.json({
      success: true,
      msg: "Category Successfully Deleted.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};
