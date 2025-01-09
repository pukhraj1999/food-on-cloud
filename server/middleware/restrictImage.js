import { rollbackPictures } from "../utils/rollback.js";

export const restrictImage = async (req, res, next) => {
  try {
    if (req.filePath.length > 1) {
      rollbackPictures(req.filePath);
      return res.status(422).json({
        success: false,
        msg: "Please upload only 1 image.",
      });
    }
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
