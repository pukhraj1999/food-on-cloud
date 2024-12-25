import path from "path";
import multer from "multer";

const FILE_PATH = "uploads/images/";
const FILE_RELATIVE_PATH = FILE_PATH.split("/").slice(1).join("/");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, FILE_PATH);
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = file.originalname.split(".")[0] + '-' + uniqueSuffix + ext;
        req.filePath.push(FILE_RELATIVE_PATH + fileName);
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
        fileSize: 2 * 1024 * 1024,
    },
}).array("img");

const handleFileErrors = (req, res, next) => {
    uploadPicture(req, res, function (err) {
        if (err) {
            switch (err.code) {
                case "LIMIT_FILE_SIZE":
                    err.error = "File Size is too large. Allowed file size is 2MB";
                    break;
                case "LIMIT_UNEXPECTED_FILE":
                    err.error = "Unexpected files found!!";
                    break;
                default:
                    err.error = err.message;
            }
            return res.status(422).json({
                msg: err.error,
                success: false,
            });
        } else {
            if (!req.files) {
                res.status(422).json({ msg: "file not found!!", success: false });
            }
            next();
        }
    });
};

export const uploadPictures = (req, res, next) => {
    req.filePath = [];
    handleFileErrors(req, res, next);
};