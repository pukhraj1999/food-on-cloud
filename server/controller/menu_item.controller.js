import Restaurent from "../models/restaurent.model.js";
import Category from "../models/category.model.js";
import MenuItem from "../models/menu_item.model.js";
import { rollbackPictures } from "../utils/rollback.js";

export const getAllMenus = async (req, res) => {
  try {
    const menus = await MenuItem.find().populate("category_id", "name").exec();
    return res.json({
      success: true,
      result:menus,
      msg: "Successfully Retrieved.",
    });
  } catch (error) {
    rollbackPictures(req.filePath);
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const getMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuItem.findById(id)
      .populate("category_id", "name")
      .exec();
    if (!menu) {
      return res.status(400).json({
        success: false,
        msg: "Menu Item with " + id + " not Exist.",
      });
    }

    return res.json({
      success: true,
      result: menu,
      msg: "Successfully Retrieved.",
    });
  } catch (error) {
    rollbackPictures(req.filePath);
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const addMenu = async (req, res) => {
  try {
    const { id } = req.params;
    // get restaurent
    const restaurent = await Restaurent.findById(id);
    if (!restaurent) {
      rollbackPictures(req.filePath);
      return res.status(422).json({
        success: false,
        msg: "Restaurent not exist with id " + id,
      });
    }

    // create menu item
    const { name, ingredients, currency, price, category_id } = req.body;

    if (
      !name ||
      !ingredients ||
      !currency ||
      !price ||
      !category_id ||
      req.filePath.length < 1
    ) {
      rollbackPictures(req.filePath);
      return res.status(422).json({
        success: false,
        msg: "All Fields must be filled.",
      });
    }

    // category exist
    const category = await Category.findById(category_id);

    if (!category) {
      rollbackPictures(req.filePath);
      return res.status(422).json({
        success: false,
        msg: "Category not exist with id " + id,
      });
    }

    const menuItem = new MenuItem({
      name,
      ingredients,
      currency,
      price,
      category_id,
      pictures: req.filePath,
    });
    const savedMenuItem = await menuItem.save();

    // add in restaurent
    const updatedRestaurent = await Restaurent.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          menu: [...restaurent.menu, savedMenuItem._id],
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    return res.json({
      success: true,
      msg: "Menu added successfully.",
      result: updatedRestaurent,
      menuItem: savedMenuItem,
    });
  } catch (error) {
    rollbackPictures(req.filePath);
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const { name, ingredients, currency, price, category_id } = req.body;
    const { id } = req.params;
    const prevMenuItem = await MenuItem.findById(id);
    if (!prevMenuItem) {
      return res.status(400).json({
        success: false,
        msg: "Menu Item with " + id + " not Exist.",
      });
    }

    console.log(name, ingredients, category_id, currency, price);

    const menuItem = await MenuItem.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          ingredients,
          currency,
          price,
          category_id,
          pictures:
            req.filePath.length > 0 ? req.filePath : prevMenuItem.pictures,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    return res.json({
      success: true,
      result:menuItem,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await MenuItem.findById(id);
    if (!menu) {
      return res.status(400).json({
        success: false,
        msg: "Menu Item with " + id + " not Exist.",
      });
    }

    await MenuItem.deleteOne({ _id: id });

    return res.json({
      success: true,
      msg: "MenuItem Successfully Deleted.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};
