import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user_id);
    return res.json({ ...user._doc, token: req.token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { type } = req.body;
    if (!type) {
      return res.status(400).json({
        msg: "Please fill all the fields!!",
      });
    }
    let user = await Product.findByIdAndUpdate(
      { _id: req.user_id },
      {
        $set: {
          type,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    return res.json({ ...user._doc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
