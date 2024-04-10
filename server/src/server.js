import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import sharp from "sharp";
import router from "./routes/index.js";
import { removeDirPath, createDirPath } from "./utils/manageDirs.js";
dotenv.config();

const app = express();
const port = process.env.PORT;
// const { __dirname } = getCurrentDirPath(import.meta);

app.use(cors());
// to handle formData/body from the client
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../public"));
app.use(morgan("dev"));

app.use("/", router);

app.listen(port, () => {
  try {
    // removeDirPath("./public");
    createDirPath("./public/uploads");

    // resolves the file locking issue, when deleting the processed file
    sharp.cache(false);
  } catch (error) {
    console.log(error);
  }
  console.log(`Example app listening on port ${port}`);
});
