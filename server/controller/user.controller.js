import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user_id);
    return res.json({ ...user._doc, token: req.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
