import Restaurent from "../models/restaurent.model.js";
import { rollbackPictures } from "../utils/rollback.js";

export const createRestaurent = async (req, res) => {
  try {
    const { title, description, location } = req.body;

    if (
      !title ||
      !description ||
      !location /* || !location.latitude || !location.longitude */
    ) {
      rollbackPictures(req.filePath);
      return res.status(400).json({
        msg: "All fields are required.",
      });
    }

    const restaurent = new Restaurent({
      title,
      description,
      location: JSON.parse(location),
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
