import multer from "multer";

const uploadDirPath = "./public/uploads";

const upload = multer({ dest: uploadDirPath });

export const uploadMiddleware = upload.single("image");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = "." + file.mimetype.replace(/.*\//, "");
//     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
//   },
// });

// const upload = multer({ storage: storage });
