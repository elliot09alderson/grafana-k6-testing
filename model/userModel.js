import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
});

export const user = mongoose.model("User", userSchema);
