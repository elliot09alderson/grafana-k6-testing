import { user } from "../model/userModel.js";

// Create a new user
export const create = async (req, res) => {
  try {
    const { userName, email } = req.body;

    if (!userName || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }

    const newUser = await user.create({ userName, email });

    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }

    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
};

// Get all users
export const get = async (req, res) => {
  try {
    const users = await user.find({});

    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error", details: error.message });
  }
};
