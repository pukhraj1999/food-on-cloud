import Restaurent from "../models/restaurent.model.js";
import { rollbackPictures } from "../utils/rollback.js";

export const getAllRestaurents = async (req, res) => {
  try {
    const restaurents = await Restaurent.find();
    return res.json({
      success: true,
      restaurents,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const getRestaurent = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurent = await Restaurent.findById(id);

    if (!restaurent) {
      return res.status(400).json({
        success: false,
        msg: "Restaurent with " + id + " not Exist.",
      });
    }

    return res.json({
      success: true,
      restaurent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const createRestaurent = async (req, res) => {
  try {
    const { title, description, latitude, longitude } = req.body;

    if (!title || !description || !latitude || !longitude) {
      rollbackPictures(req.filePath);
      return res.status(400).json({
        success: false,
        msg: "All fields are required.",
      });
    }

    const restaurent = new Restaurent({
      title,
      description,
      latitude,
      longitude,
      pictures: req.filePath,
    });
    const savedRestaurent = await restaurent.save();
    res.json({
      success: true,
      restaurent: savedRestaurent,
      msg: "Restaurent created successfully.",
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

export const updateRestaurent = async (req, res) => {
  try {
    const { title, description, latitude, longitude } = req.body;
    const { id } = req.params;
    const prevRestaurent = await Restaurent.findById(id);
    if (!prevRestaurent) {
      return res.status(400).json({
        success: false,
        msg: "Restaurent with " + id + " not Exist.",
      });
    }

    const restaurent = await Restaurent.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          description,
          latitude,
          longitude,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    return res.json({
      success: true,
      restaurent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};

export const deleteRestaurent = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurent = await Restaurent.findById(id);
    if (!restaurent) {
      return res.status(400).json({
        success: false,
        msg: "Restaurent with " + id + " not Exist.",
      });
    }

    await Restaurent.deleteOne({ _id: id });
    rollbackPictures(restaurent.pictures);

    return res.json({
      success: true,
      msg: "Restaurent Successfully Deleted.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error.",
    });
  }
};
