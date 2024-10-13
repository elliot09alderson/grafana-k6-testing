import express from "express";
import dotenv from "dotenv";
import connection from "./connection/connection.js";
import router from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1", router);

const PORT = process.env.PORT || 8000;

connection;

app.listen(PORT, () => {
  console.log("server is listing on ", PORT);
});
