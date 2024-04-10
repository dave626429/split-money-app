import { Router } from "express";
import { uploadMiddleware } from "../middlewares/multerSetup.js";
import { fetchImage, postImageResize } from "../controller/index.js";

const router = Router();

router.post("/uploads", uploadMiddleware, postImageResize);

router.get("/images/:name", fetchImage);

export default router;
