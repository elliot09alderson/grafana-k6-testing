import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.URI;

const connection = mongoose
  .connect(URI)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.error("err", err);
  });

export default connection;
