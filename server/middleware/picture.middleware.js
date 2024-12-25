import path from "path";
import multer from "multer";

const FILE_PATH = "uploads/images/";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, FILE_PATH);
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = file.originalname + '-' + uniqueSuffix + ext;
        req.filePath = FILE_PATH + fileName;
        cb(null, fileName);
    },
});

const uploadPicture = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/svg+xml"
        ) {
            cb(null, true);
        } else {
            cb(
                {
                    success: false,
                    error:
                        "Invalid file type. Only jpg, png,svg image files are allowed.",
                },
                false
            );
        }
    },
    limits: {
        fileSize: 3 * 1024 * 1024,
    },
}).single("img");

const handleFileErrors = (req, res, next) => {
    uploadPicture(req, res, function (err) {
        if (err) {
            if (err.code == "LIMIT_FILE_SIZE") {
                err.error = "File Size is too large. Allowed file size is 2MB";
            }
            return res.status(422).json({
                msg: err.error,
                success: false,
            });
        } else {
            if (!req.file) {
                res.status(422).json({ error: "file not found!!", success: false });
            }
            next();
        }
    });
};

export const uploadPictures = (req, res, next) => {
    handleFileErrors(req, res, next);
};