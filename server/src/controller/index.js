import { reduceImageSize } from "../utils/imageReducer.js";
import { getCurrentDirPath } from "../utils/manageDirs.js";
import { removeFileFromUploadsDir } from "../utils/manageFiles.js";
import path from "path";

export async function postImageResize(req, res) {
  try {
    const { filename } = req.file;
    const ext = req.file.mimetype.replace(/.*\//, ".");
    const inputFileName = "./public/uploads/" + filename;
    const outputFileName = "./public/uploads/" + filename + ext;

    await reduceImageSize(inputFileName, outputFileName);
    await removeFileFromUploadsDir(inputFileName);

    return res.status(200).send({ fileName: filename + ext });
  } catch (error) {
    console.log(error);
  }
}

export function fetchImage(req, res) {
  console.log(req.params);
  const imagePath = path.join(
    getCurrentDirPath(import.meta).__dirname,
    "..",
    "..",
    "public/uploads/",
    req.params.name
  );
  return res.sendFile(imagePath);
}
